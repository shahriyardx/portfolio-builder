import Container from "@/components/container"
import { prisma } from "@/lib/db"
import type { Metadata } from "next"

type Props = {
  params: Promise<{ username: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { username } = await params

  // fetch data
  const user = await prisma.user.findFirst({
    where: {
      username: username,
    },
  })

  if (user) {
    return {
      title: user.name,
    }
  }

  return {
    title: "Portfolio Not Found",
  }
}
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <Container className="mt-5">{children}</Container>
}
