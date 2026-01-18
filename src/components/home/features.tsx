"use client"

import { Zap, Palette, Code, Share2, Settings, Lock } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Optimized for speed. Your portfolio loads in milliseconds and ranks well in search engines.",
  },
  {
    icon: Palette,
    title: "Fully Customizable",
    description:
      "Choose from beautiful templates or customize every color, font, and layout to match your brand.",
  },
  {
    icon: Code,
    title: "No Coding Required",
    description:
      "Drag-and-drop interface makes it easy to create a professional portfolio without writing code.",
  },
  {
    icon: Share2,
    title: "Easy Sharing",
    description:
      "Get a shareable link instantly. Works on all devices. Perfect for job applications and networking.",
  },
  {
    icon: Settings,
    title: "Rich Features",
    description:
      "Add projects, experience, skills, education, and custom sections. Everything you need.",
  },
  {
    icon: Lock,
    title: "Secure & Reliable",
    description:
      "Enterprise-grade security keeps your data safe. Your portfolio is always online and accessible.",
  },
]

export default function Features() {
  return (
    <section className="py-20 px-6 bg-card border-t border-b border-border">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4 text-balance">
            Everything You Need
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Powerful features designed to help you showcase your best work and
            land your dream job.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.description}
                className="p-6 rounded-lg border border-border hover:border-accent transition-colors bg-background"
              >
                <Icon className="w-10 h-10 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
