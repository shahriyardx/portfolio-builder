"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CTA() {
  return (
    <section className="py-20 px-6 bg-linear-to-r from-primary/10 to-accent/10 border-t border-border">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground text-balance">
            Ready to Showcase Your Work?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Create your professional portfolio today and start impressing
            employers, clients, and collaborators.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="gap-2 rounded-full text-base h-12"
          >
            <Link href={"/dashboard"}>
              Create Your Portfolio
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>

        <p className="text-sm text-muted-foreground">
          ✨ Get started free - No credit card required
        </p>
      </div>
    </section>
  )
}
