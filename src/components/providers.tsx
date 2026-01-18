"use client"

import { TRPCProvider } from "@/lib/trpc/client"
import { ThemeProvider } from "next-themes"
import type { ReactNode } from "react"

export const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider attribute={"class"}>
      <TRPCProvider>{children}</TRPCProvider>
    </ThemeProvider>
  )
}
