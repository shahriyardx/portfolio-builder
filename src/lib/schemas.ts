import { z } from "zod"

// Enum schemas
export const WorkTypeSchema = z.enum(["REMOTE", "ONSITE", "HYBRID"])

const emptyToUndefined = (v: unknown) =>
  v === "" || v === null ? undefined : v

// Nested schemas
const ProjectSchema = z.object({
  title: z
    .string()
    .min(1, "Project title is required")
    .min(2, "Title must be at least 2 characters")
    .max(200, "Title must not exceed 200 characters"),

  description: z
    .string()
    .min(1, "Description is required")
    .min(10, "Description must be at least 10 characters")
    .max(2000, "Description must not exceed 2000 characters"),

  image: z.url("Image must be a valid URL").min(1, "Project image is required"),

  repoLink: z.preprocess(emptyToUndefined, z.string().url().optional()),

  liveLink: z.url("Live link must be a valid URL").optional().or(z.literal("")),
  technologies: z.string().min(1, "Technology cannot be empty"),
})

export const EducationSchema = z
  .object({
    degree: z
      .string()
      .min(2, "Degree must be at least 2 characters")
      .max(100, "Degree must not exceed 100 characters"),

    institution: z
      .string()
      .min(2, "Institution must be at least 2 characters")
      .max(200, "Institution must not exceed 200 characters"),

    fieldOfStudy: z.preprocess(
      emptyToUndefined,
      z.string().max(100).optional(),
    ),

    startYear: z.coerce.number().min(1900).max(new Date().getFullYear()),

    endYear: z.preprocess(
      emptyToUndefined,
      z.coerce
        .number()
        .min(1900)
        .max(new Date().getFullYear() + 10)
        .optional()
        .nullable(),
    ),

    grade: z.preprocess(emptyToUndefined, z.string().max(20).optional()),

    description: z.preprocess(
      emptyToUndefined,
      z.string().max(1000).optional(),
    ),
  })
  .refine((data) => !data.endYear || data.endYear >= data.startYear, {
    message: "End year must be equal to or after start year",
    path: ["endYear"],
  })

const ExperienceSchema = z
  .object({
    role: z
      .string()
      .min(1, "Role is required")
      .min(2, "Role must be at least 2 characters")
      .max(100, "Role must not exceed 100 characters"),

    company: z
      .string()
      .min(1, "Company is required")
      .min(2, "Company must be at least 2 characters")
      .max(200, "Company must not exceed 200 characters"),

    location: z
      .string()
      .max(100, "Location must not exceed 100 characters")
      .optional()
      .or(z.literal("")),

    employmentType: WorkTypeSchema.optional(),

    startDate: z.coerce.date(),

    endDate: z.coerce.date().optional().nullable(),

    isCurrent: z.boolean().default(false),

    responsibilities: z
      .string()
      .max(2000, "Responsibilities must not exceed 2000 characters")
      .optional()
      .or(z.literal("")),

    technologies: z
      .array(z.string().min(1, "Technology cannot be empty"))
      .optional(),
  })
  .refine((data) => !data.endDate || !data.isCurrent, {
    message: "End date cannot be set for current employment",
    path: ["endDate"],
  })
  .refine(
    (data) => {
      if (!data.endDate) return true
      return new Date(data.endDate) >= new Date(data.startDate)
    },
    {
      message: "End date must be after start date",
      path: ["endDate"],
    },
  )

// Complete Portfolio Schema with nested items
export const PortfolioSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must not exceed 100 characters"),

  role: z
    .string()
    .min(1, "Role is required")
    .min(2, "Role must be at least 2 characters")
    .max(100, "Role must not exceed 100 characters"),

  location: z
    .string()
    .min(1, "Location is required")
    .max(100, "Location must not exceed 100 characters"),

  bio: z
    .string()
    .min(1, "Bio is required")
    .min(50, "Bio must be at least 50 characters")
    .max(1000, "Bio must not exceed 1000 characters"),
  workType: WorkTypeSchema,

  githubLink: z
    .url("GitHub link must be a valid URL")
    .optional()
    .or(z.literal("")),
  linkedinLink: z
    .url("LinkedIn link must be a valid URL")
    .optional()
    .or(z.literal("")),
  portfolioLink: z
    .url("Portfolio link must be a valid URL")
    .optional()
    .or(z.literal("")),
  resumeLink: z
    .url("Resume link must be a valid URL")
    .optional()
    .or(z.literal("")),
  languages: z.array(
    z.object({
      name: z.string(),
    }),
  ),
  skills: z.array(
    z.object({
      name: z.string(),
    }),
  ),
  projects: z.array(ProjectSchema),
  education: z.array(EducationSchema),
  experiences: z.array(ExperienceSchema),
})

export type PortfolioFormData = z.infer<typeof PortfolioSchema>
