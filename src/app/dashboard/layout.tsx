import Container from "@/components/container"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard page",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <Container className="mt-5">{children}</Container>
}
