"use client"

import { useFieldArray, type UseFormReturn } from "react-hook-form"
import type { PortfolioFormData } from "@/lib/schemas"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { X, Plus, ExternalLink } from "lucide-react"
import Link from "next/link"

type Props = {
  form: UseFormReturn<PortfolioFormData>
  onSubmit: (data: PortfolioFormData) => void
  isLoading: boolean
  username?: string
}

export function PortfolioForm({ form, onSubmit, isLoading, username }: Props) {
  const {
    fields: projectFields,
    append: appendProject,
    remove: removeProject,
  } = useFieldArray({
    control: form.control,
    name: "projects",
  })

  const {
    fields: educationFields,
    append: appendEducation,
    remove: removeEducation,
  } = useFieldArray({
    control: form.control,
    name: "education",
  })

  const {
    fields: experienceFields,
    append: appendExperience,
    remove: removeExperience,
  } = useFieldArray({
    control: form.control,
    name: "experiences",
  })

  const {
    fields: languageFields,
    append: appendLanguage,
    remove: removeLanguage,
  } = useFieldArray({
    control: form.control,
    name: "languages",
  })

  const {
    fields: skillFields,
    append: appendSkill,
    remove: removeSkill,
  } = useFieldArray({
    control: form.control,
    name: "skills",
  })

  return (
    <div className="min-h-screen w-full bg-background p-6">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Portfolio Builder</h1>
            <p className="text-muted-foreground mt-2">
              Create and manage your complete portfolio
            </p>
          </div>

          {username && (
            <Button asChild>
              <Link target="_blank" href={`/p/${username}`}>
                <ExternalLink />
                Preview
              </Link>
            </Button>
          )}
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Basic Information Section */}
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>
                  Your name, role, and main details
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="role"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Professional Role</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Full Stack Developer"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Location</FormLabel>
                        <FormControl>
                          <Input placeholder="New York, USA" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="workType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Work Type</FormLabel>
                        <Select
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="REMOTE">Remote</SelectItem>
                            <SelectItem value="ONSITE">On-site</SelectItem>
                            <SelectItem value="HYBRID">Hybrid</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="bio"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bio</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about yourself..."
                          className="resize-none"
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>Max 1000 characters</FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Links Section */}
            <Card>
              <CardHeader>
                <CardTitle>Links & Social Media</CardTitle>
                <CardDescription>Your professional links</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="githubLink"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>GitHub</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="https://github.com/..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="linkedinLink"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>LinkedIn</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="https://linkedin.com/in/..."
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <FormField
                    control={form.control}
                    name="portfolioLink"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Portfolio Website</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="https://myportfolio.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="resumeLink"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Resume/CV</FormLabel>
                        <FormControl>
                          <Input placeholder="https://..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </CardContent>
            </Card>

            {/* Languages & Skills */}
            <Card>
              <CardHeader>
                <CardTitle>Languages & Skills</CardTitle>
                <CardDescription>
                  Add your languages and technical skills
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <FormLabel>Languages</FormLabel>
                  <div className="flex gap-2">
                    <Input
                      id="language-input"
                      placeholder="Type a language..."
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault()
                          const value = e.currentTarget.value
                          if (value.trim()) {
                            appendLanguage({ name: value })
                            e.currentTarget.value = ""
                          }
                        }
                      }}
                    />
                    <Button
                      type="button"
                      onClick={() => {
                        const input = document.getElementById(
                          "language-input",
                        ) as HTMLInputElement
                        if (input.value.trim()) {
                          appendLanguage({ name: input.value })
                          input.value = ""
                        }
                      }}
                      variant="outline"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {languageFields.map((field, index) => (
                      <Badge
                        key={field.id}
                        variant="secondary"
                        className="cursor-pointer"
                      >
                        {form.watch(`languages.${index}.name`)}
                        <button
                          type="button"
                          onClick={() => removeLanguage(index)}
                          className="ml-1 hover:opacity-70"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                  <FormMessage />
                </div>

                <div className="space-y-3">
                  <FormLabel>Skills</FormLabel>
                  <div className="flex gap-2">
                    <Input
                      id="skill-input"
                      placeholder="Type a skill..."
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault()
                          const value = e.currentTarget.value
                          if (value.trim()) {
                            appendSkill({ name: value })
                            e.currentTarget.value = ""
                          }
                        }
                      }}
                    />
                    <Button
                      type="button"
                      onClick={() => {
                        const input = document.getElementById(
                          "skill-input",
                        ) as HTMLInputElement
                        if (input.value.trim()) {
                          appendSkill({ name: input.value })
                          input.value = ""
                        }
                      }}
                      variant="outline"
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillFields.map((field, index) => (
                      <Badge
                        key={field.id}
                        variant="default"
                        className="cursor-pointer"
                      >
                        {form.watch(`skills.${index}.name`)}
                        <button
                          type="button"
                          onClick={() => removeSkill(index)}
                          className="ml-1 hover:opacity-70"
                        >
                          <X className="h-3 w-3" />
                        </button>
                      </Badge>
                    ))}
                  </div>
                  <FormMessage />
                </div>
              </CardContent>
            </Card>

            {/* Projects Section */}
            <Card>
              <CardHeader>
                <CardTitle>Projects</CardTitle>
                <CardDescription>Showcase your best work</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {projectFields.map((field, index) => (
                  <div
                    key={field.id}
                    className="space-y-4 rounded-lg border p-4"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">Project {index + 1}</h4>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeProject(index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>

                    <FormField
                      control={form.control}
                      name={`projects.${index}.title`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Project Title</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="My Amazing Project"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name={`projects.${index}.description`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Describe your project..."
                              rows={3}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name={`projects.${index}.image`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Image URL</FormLabel>
                          <FormControl>
                            <Input placeholder="https://..." {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid gap-4 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name={`projects.${index}.repoLink`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Repository Link</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="https://github.com/..."
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`projects.${index}.liveLink`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Live Link</FormLabel>
                            <FormControl>
                              <Input placeholder="https://..." {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name={`projects.${index}.technologies`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Technologies</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="e.g React, Nodejs, Tailwind, ..."
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                ))}

                <Button
                  type="button"
                  variant="outline"
                  onClick={() =>
                    appendProject({
                      title: "",
                      description: "",
                      image: "",
                      repoLink: "",
                      liveLink: "",
                      technologies: "",
                    })
                  }
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Add Project
                </Button>
              </CardContent>
            </Card>

            {/* Education Section */}
            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
                <CardDescription>Your educational background</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {educationFields.map((field, index) => (
                  <div
                    key={field.id}
                    className="space-y-4 rounded-lg border p-4"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold">Education {index + 1}</h4>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeEducation(index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      <FormField
                        control={form.control}
                        name={`education.${index}.degree`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Degree</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Bachelor of Science"
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`education.${index}.institution`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Institution</FormLabel>
                            <FormControl>
                              <Input placeholder="University Name" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name={`education.${index}.fieldOfStudy`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Field of Study</FormLabel>
                          <FormControl>
                            <Input placeholder="Computer Science" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <div className="grid gap-4 md:grid-cols-3">
                      <FormField
                        control={form.control}
                        name={`education.${index}.startYear`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Start Year</FormLabel>
                            <FormControl>
                              <Input
                                type="number"
                                placeholder="2020"
                                value={field.value ?? ""}
                                onChange={(e) =>
                                  field.onChange(
                                    e.target.value
                                      ? Number(e.target.value)
                                      : "",
                                  )
                                }
                                onBlur={field.onBlur}
                                name={field.name}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name={`education.${index}.endYear`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>End Year</FormLabel>
                            <FormControl>
                              <Input
                                type="number"
                                placeholder="2024 (empty if still studying)"
                                value={field.value ?? ""}
                                onChange={(e) =>
                                  field.onChange(
                                    e.target.value
                                      ? Number(e.target.value)
                                      : undefined,
                                  )
                                }
                                onBlur={field.onBlur}
                                name={field.name}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name={`education.${index}.grade`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Grade/GPA</FormLabel>
                            <FormControl>
                              <Input placeholder="3.8" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name={`education.${index}.description`}
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Description</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us more..."
                              rows={2}
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                ))}

                <Button
                  type="button"
                  variant="outline"
                  onClick={() =>
                    appendEducation({
                      degree: "",
                      institution: "",
                      fieldOfStudy: "",
                      startYear: new Date().getFullYear(),
                      endYear: undefined,
                      grade: "",
                      description: "",
                    })
                  }
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Add Education
                </Button>
              </CardContent>
            </Card>

            {/* Experience Section */}
            <Card>
              <CardHeader>
                <CardTitle>Work Experience</CardTitle>
                <CardDescription>Your professional experience</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {experienceFields.map((field, index) => {
                  const isCurrent = form.watch(`experiences.${index}.isCurrent`)
                  return (
                    <div
                      key={field.id}
                      className="space-y-4 rounded-lg border p-4"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold">
                          Experience {index + 1}
                        </h4>
                        <Button
                          type="button"
                          variant="ghost"
                          size="sm"
                          onClick={() => removeExperience(index)}
                        >
                          <X className="h-4 w-4" />
                        </Button>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <FormField
                          control={form.control}
                          name={`experiences.${index}.role`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Job Title</FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Senior Developer"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`experiences.${index}.company`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Company</FormLabel>
                              <FormControl>
                                <Input placeholder="Company Name" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <FormField
                          control={form.control}
                          name={`experiences.${index}.location`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Location</FormLabel>
                              <FormControl>
                                <Input placeholder="New York, USA" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name={`experiences.${index}.employmentType`}
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Employment Type</FormLabel>
                              <Select
                                value={field.value || "REMOTE"}
                                onValueChange={field.onChange}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="REMOTE">Remote</SelectItem>
                                  <SelectItem value="ONSITE">
                                    On-site
                                  </SelectItem>
                                  <SelectItem value="HYBRID">Hybrid</SelectItem>
                                </SelectContent>
                              </Select>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <FormField
                          control={form.control}
                          name={`experiences.${index}.startDate`}
                          render={({ field }) => {
                            const dateValue =
                              field.value instanceof Date
                                ? field.value.toISOString().split("T")[0]
                                : ""
                            return (
                              <FormItem>
                                <FormLabel>Start Date</FormLabel>
                                <FormControl>
                                  <Input
                                    type="date"
                                    value={dateValue}
                                    onChange={(e) =>
                                      field.onChange(new Date(e.target.value))
                                    }
                                    onBlur={field.onBlur}
                                    name={field.name}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )
                          }}
                        />

                        <FormField
                          control={form.control}
                          name={`experiences.${index}.endDate`}
                          render={({ field }) => {
                            const dateValue =
                              field.value instanceof Date
                                ? field.value.toISOString().split("T")[0]
                                : ""
                            return (
                              <FormItem>
                                <FormLabel>End Date</FormLabel>
                                <FormControl>
                                  <Input
                                    type="date"
                                    disabled={isCurrent}
                                    value={dateValue}
                                    onChange={(e) =>
                                      field.onChange(
                                        e.target.value
                                          ? new Date(e.target.value)
                                          : null,
                                      )
                                    }
                                    onBlur={field.onBlur}
                                    name={field.name}
                                  />
                                </FormControl>
                                {isCurrent && (
                                  <FormDescription>
                                    Disabled because this is your current job
                                  </FormDescription>
                                )}
                                <FormMessage />
                              </FormItem>
                            )
                          }}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name={`experiences.${index}.isCurrent`}
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-center space-y-0">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <FormLabel className="font-normal">
                              I currently work here
                            </FormLabel>
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name={`experiences.${index}.responsibilities`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Responsibilities</FormLabel>
                            <FormControl>
                              <Textarea
                                placeholder="Describe your responsibilities..."
                                rows={3}
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name={`experiences.${index}.technologies`}
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Technologies</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="e.g React, Nodejs, Tailwind, ..."
                                {...field}
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  )
                })}

                <Button
                  type="button"
                  variant="outline"
                  onClick={() =>
                    appendExperience({
                      role: "",
                      company: "",
                      location: "",
                      employmentType: "REMOTE",
                      startDate: new Date(),
                      endDate: undefined,
                      isCurrent: false,
                      responsibilities: "",
                      technologies: "",
                    })
                  }
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Add Experience
                </Button>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="flex gap-2">
              <Button type="submit" disabled={isLoading} className="flex-1">
                {isLoading ? "Saving..." : "Save Portfolio"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}
