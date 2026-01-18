"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-b from-background via-card to-background">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground text-balance">
            Build Your Perfect <span className="text-primary">Portfolio</span>{" "}
            in Minutes
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Create a stunning professional portfolio without coding. Showcase
            your work, skills, and experience with our intuitive builder.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <Button
            size="lg"
            className="gap-2 rounded-full text-base h-12"
            asChild
          >
            <Link href={"/dashboard"}>
              Start Building Free
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="rounded-full text-base h-12 bg-transparent"
          >
            <Link href={"/p/shahriyardx"}>Watch Demo</Link>
          </Button>
        </div>

        <div className="pt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span>No credit card required</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span>Deploy in seconds</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span>Fully customizable</span>
          </div>
        </div>
      </div>
    </section>
  )
}
