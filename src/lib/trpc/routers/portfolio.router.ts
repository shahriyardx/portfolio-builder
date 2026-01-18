import { PortfolioSchema } from "@/lib/schemas"
import { baseProcedure, createTRPCRouter, protectedProcedure } from "../init"
import { prisma } from "@/lib/db"
import z from "zod"

export const portfolioRouter = createTRPCRouter({
  byUsername: baseProcedure
    .input(
      z.object({
        username: z.string(),
      }),
    )
    .query(async ({ input }) => {
      const user = await prisma.user.findFirst({
        where: {
          username: input.username,
        },
      })

      if (!user) {
        return null
      }

      const portfolio = await prisma.portfolio.findFirst({
        where: {
          userId: user.id,
        },
        include: {
          education: true,
          experiences: true,
          projects: true,
          user: true,
        },
      })

      return portfolio
    }),
  myPortfolio: protectedProcedure.query(async ({ ctx }) => {
    const portfolio = await prisma.portfolio.findFirst({
      where: {
        userId: ctx.session.user.id,
      },
      include: {
        education: true,
        experiences: true,
        projects: true,
        user: {
          select: { username: true },
        },
      },
    })

    return portfolio
  }),
  update: protectedProcedure
    .input(PortfolioSchema)
    .mutation(async ({ ctx, input: data }) => {
      const portfolio = await prisma.portfolio.findFirst({
        where: {
          userId: ctx.session.user.id,
        },
      })
      if (portfolio) {
        await prisma.portfolio.delete({
          where: {
            id: portfolio.id,
          },
        })
      }
      await prisma.portfolio.create({
        data: {
          userId: ctx.session.user.id,
          bio: data.bio,
          education: {
            createMany: {
              data: data.education.map((e) => ({
                degree: e.degree,
                description: e.description,
                endYear: e.endYear,
                fieldOfStudy: e.fieldOfStudy,
                grade: e.grade,
                institution: e.institution,
                startYear: e.startYear,
              })),
            },
          },
          experiences: {
            createMany: {
              data: data.experiences,
            },
          },
          languages: data.languages.map((l) => l.name),
          location: data.location,
          projects: {
            createMany: {
              data: data.projects.map((p) => ({
                description: p.description,
                image: p.image,
                liveLink: p.liveLink,
                repoLink: p.repoLink,
                technologies: p.technologies,
                title: p.title,
              })),
            },
          },
          name: data.name,
          role: data.role,
          skills: data.skills.map((s) => s.name),
          workType: data.workType,
          githubLink: data.githubLink,
          linkedinLink: data.linkedinLink,
          portfolioLink: data.portfolioLink,
          resumeLink: data.resumeLink,
        },
      })
      return {}
    }),
})
