"use client"

import { PortfolioForm } from "@/components/portfolio-form"
import { PortfolioSchema, type PortfolioFormData } from "@/lib/schemas"
import { trpc } from "@/lib/trpc/client"
import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"

const Page = () => {
  const { data, isLoading } = trpc.portfolio.myPortfolio.useQuery()
  const form = useForm<PortfolioFormData>({
    // @ts-expect-error
    resolver: zodResolver(PortfolioSchema),
    defaultValues: {
      name: "",
      role: "",
      location: "",
      bio: "",
      workType: "REMOTE",
      githubLink: "",
      linkedinLink: "",
      portfolioLink: "",
      resumeLink: "",
      languages: [],
      skills: [],
      projects: [],
      education: [],
      experiences: [],
    },
  })

  useEffect(() => {
    if (data) {
      form.reset({
        ...data,
        languages: data.languages.map((lang) => ({ name: lang })),
        skills: data.skills.map((lang) => ({ name: lang })),
      } as PortfolioFormData)
    }
  }, [data, form.reset])

  const { isPending, mutate } = trpc.portfolio.update.useMutation({
    onSuccess: () => toast.success("portfolio updated"),
    onError: (e) => toast.error(e.message),
  })

  const onSubmit = (data: PortfolioFormData) => {
    mutate({
      bio: data.bio,
      education: data.education.map((e) => ({
        degree: e.degree,
        description: e.description,
        endYear: e.endYear,
        fieldOfStudy: e.fieldOfStudy,
        grade: e.grade,
        institution: e.institution,
        startYear: e.startYear,
      })),
      experiences: data.experiences,
      languages: data.languages,
      location: data.location,
      projects: data.projects.map((p) => ({
        description: p.description,
        image: p.image,
        liveLink: p.liveLink,
        repoLink: p.repoLink,
        technologies: p.technologies,
        title: p.title,
      })),
      name: data.name,
      role: data.role,
      skills: data.skills,
      workType: data.workType,
      githubLink: data.githubLink,
      linkedinLink: data.linkedinLink,
      portfolioLink: data.portfolioLink,
      resumeLink: data.resumeLink,
    })
  }

  return (
    <div>
      {isLoading ? (
        <Loader2 className="animate-spin" />
      ) : (
        <div>
          <PortfolioForm
            // @ts-expect-error
            form={form}
            onSubmit={onSubmit}
            isLoading={isPending}
            username={data?.user.username ?? undefined}
          />
        </div>
      )}
    </div>
  )
}

export default Page
