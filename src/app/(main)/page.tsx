"use client"

import Hero from "@/components/home/hero"
import Features from "@/components/home/features"
import Showcase from "@/components/home/how-it-works"
import CTA from "@/components/home/cta"
import Footer from "@/components/home/footer"

export default function BuilderHome() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <Features />
      <Showcase />
      <CTA />
      <Footer />
    </main>
  )
}
