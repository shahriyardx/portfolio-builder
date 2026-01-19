import Container from "@/components/container"
import RequireAuth from "@/components/require-auth"
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
  return (
    <Container className="mt-5">
      <RequireAuth>{children}</RequireAuth>
    </Container>
  )
}
