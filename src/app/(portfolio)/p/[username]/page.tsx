"use client"

import Container from "@/components/container"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { trpc } from "@/lib/trpc/client"
import { ArrowLeft, CircleAlert, ExternalLink, Loader2 } from "lucide-react"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { useParams } from "next/navigation"

const Page = () => {
  const { username } = useParams()
  const { data, isLoading } = trpc.portfolio.byUsername.useQuery({
    username: username as string,
  })

  if (isLoading)
    return (
      <div className="min-h-screen grid place-items-center">
        {isLoading && (
          <div className="flex items-center gap-2">
            <Loader2 className="animate-spin" />
            <p>Loading...</p>
          </div>
        )}
      </div>
    )

  return (
    <div>
      {data ? (
        <div>
          <div className="py-4 border-b-2">
            <Container>
              <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
                <div>
                  <nav className="flex items-center justify-between">
                    <div>
                      <h1 className="text-xl font-bold">{data.name}</h1>
                      <p className="text-sm text-muted-foreground">
                        {data.role}
                      </p>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-3">
                        <Link
                          href={data.githubLink || "#"}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Github size={20} />
                        </Link>
                        <Link
                          href={data.linkedinLink || "#"}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Linkedin size={20} />
                        </Link>
                        <Link
                          href={`mailto:${data.user.email}`}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          <Mail size={20} />
                        </Link>
                      </div>
                    </div>
                  </nav>
                </div>
              </header>
            </Container>
          </div>
          <Container>
            <div className="mt-5">
              <div className="border-b-2 py-20">
                <h1 className="text-4xl sm:text-5xl font-bold mb-2 text-pretty">
                  {data.name}
                </h1>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                  <span className="text-lg font-semibold text-foreground">
                    {data.role}
                  </span>
                  <span className="hidden sm:inline text-muted-foreground">
                    •
                  </span>
                  <span className="text-lg text-muted-foreground">
                    {data.location}
                  </span>
                  <span className="hidden sm:inline text-muted-foreground">
                    •
                  </span>
                  <Badge variant={"outline"}>Full-time</Badge>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {data.bio}
                </p>

                {(data.portfolioLink || data.resumeLink) && (
                  <div className="mt-12 flex items-center gap-4">
                    {data.portfolioLink && (
                      <Link
                        href={data.portfolioLink}
                        className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity"
                      >
                        Get in Touch
                      </Link>
                    )}

                    {data.resumeLink && (
                      <a
                        href={data.resumeLink}
                        className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-muted transition-colors"
                      >
                        Download Resume
                      </a>
                    )}
                  </div>
                )}
              </div>

              <div className="py-20 border-b-2">
                <h2 className="text-3xl font-bold mb-16">Experience</h2>

                <div className="space-y-12">
                  {data.experiences.map((exp) => (
                    <div
                      key={exp.id}
                      className="pb-12 border-b border-border last:border-b-0"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">
                            {exp.role}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1">
                            {exp.company} • {exp.location}
                          </p>
                        </div>
                        <div className="flex flex-col sm:text-right mt-2 sm:mt-0">
                          <span className="text-sm font-medium">
                            {exp.startDate.getFullYear()} -{" "}
                            {exp.endDate
                              ? exp.endDate.getFullYear()
                              : "Present"}
                          </span>
                          <span className="text-xs text-muted-foreground capitalize">
                            {exp.employmentType?.toLowerCase()}
                          </span>
                        </div>
                      </div>

                      <p className="text-foreground leading-relaxed mb-4">
                        {exp.responsibilities}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.split(",").map((t) => (
                          <span
                            key={t}
                            className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground"
                          >
                            {t.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="py-20 border-b-2">
                <h2 className="text-3xl font-bold mb-16">Projects</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {data.projects.map((project) => (
                    <div
                      key={project.id}
                      className="group border border-border rounded-lg p-6 hover:border-primary hover:bg-muted/50 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex gap-2">
                          {project.liveLink && (
                            <Link
                              href={project.liveLink}
                              className="text-muted-foreground hover:text-primary transition-colors"
                              aria-label="View live"
                            >
                              <ExternalLink size={18} />
                            </Link>
                          )}
                          {project.repoLink && (
                            <Link
                              href={project.repoLink}
                              className="text-muted-foreground hover:text-primary transition-colors"
                              aria-label="View source"
                            >
                              <Github size={18} />
                            </Link>
                          )}
                        </div>
                      </div>

                      <p className="text-foreground text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.split(",").map((t) => (
                          <span
                            key={t}
                            className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-background text-muted-foreground"
                          >
                            {t.trim()}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="py-20 border-b-2">
                <h2 className="text-3xl font-bold mb-16">Skills & Languages</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-6">
                      Skills
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {data.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 border border-border rounded-lg text-sm font-medium text-foreground hover:border-primary hover:bg-muted transition-all duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-6">
                      Languages
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {data.languages.map((skill) => (
                        <span
                          key={skill}
                          className="px-4 py-2 border border-border rounded-lg text-sm font-medium text-foreground hover:border-primary hover:bg-muted transition-all duration-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="py-20 border-b-2">
                <h2 className="text-3xl font-bold mb-16">Education</h2>

                <div className="space-y-8">
                  {data.education.map((edu, idx) => (
                    <div
                      key={edu.id}
                      className="flex gap-6 pb-8 border-b border-border last:border-b-0"
                    >
                      <div className="shrink-0 w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                        <span className="text-sm font-bold text-muted-foreground">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                          <h3 className="text-lg font-semibold text-foreground">
                            {edu.degree}
                          </h3>
                          <span className="text-sm text-muted-foreground mt-1 sm:mt-0">
                            {edu.startYear} - {edu.endYear ?? "Current"}
                          </span>
                        </div>

                        <p className="text-sm text-muted-foreground mb-2">
                          {edu.institution}
                          {edu.fieldOfStudy && ` • ${edu.fieldOfStudy}`}
                        </p>

                        <p className="text-foreground leading-relaxed mb-3">
                          {edu.description}
                        </p>

                        {edu.grade && (
                          <p className="text-sm font-medium">GPA {edu.grade}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="py-20">
                <div className="flex flex-col items-center justify-center text-center">
                  <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                    Let's Work Together
                  </h2>

                  <p className="text-lg text-foreground max-w-2xl mb-12 leading-relaxed">
                    I'm always interested in hearing about new projects and
                    opportunities. Feel free to reach out if you'd like to
                    collaborate or just chat about tech.
                  </p>

                  <Button asChild size={"lg"}>
                    <Link href={`mailto:${data.user.email}`}>Get in Touch</Link>
                  </Button>
                </div>
              </div>
            </div>
          </Container>
          <div className="py-5 border-t-2">
            <Container className="flex items-center justify-between">
              <span>Create your own portfolio</span>
              <Button variant={"outline"} asChild>
                <Link href={"/auth/sign-in"}>Get Started</Link>
              </Button>
            </Container>
          </div>
        </div>
      ) : (
        <div className="min-h-screen grid place-items-center">
          <div className="flex flex-col items-center p-7 border-2 rounded-md space-y-5">
            <CircleAlert className="text-yellow-500" size={50} />
            <h1 className="text-2xl font-bold">Portfolio Not Found</h1>
            <p className="max-w-[45ch] text-muted-foreground">
              The username you entered is currently not associated with any
              portfolio. Please make sure the username is correct or check back
              later after a portfolio has been created.
            </p>

            <Button asChild>
              <Link href={"/"}>
                <ArrowLeft /> Back to home
              </Link>
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Page
