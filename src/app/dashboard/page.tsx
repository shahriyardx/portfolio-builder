"use client"

import { PortfolioForm } from "@/components/portfolio-form"
import { PortfolioSchema, type PortfolioFormData } from "@/lib/schemas"
import { trpc } from "@/lib/trpc/client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

const Page = () => {
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

  const { isPending, mutate } = trpc.portfolio.update.useMutation({})

  const onSubmit = (data: PortfolioFormData) => {
    console.log(data)
    mutate()
  }

  return (
    <div>
      {/* @ts-expect-error */}
      <PortfolioForm form={form} onSubmit={onSubmit} isLoading={isPending} />
    </div>
  )
}

export default Page
