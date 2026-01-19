"use client"

import useSession from "@/hooks/use-session"
import { Loader2 } from "lucide-react"
import { useRouter } from "next/navigation"
import { type ComponentProps, useEffect } from "react"

type Props = ComponentProps<"div">

const RequireAuth = ({ children }: Props) => {
  const { data, isPending } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!isPending && !data) {
      router.push("/auth/sign-in")
    }
  }, [isPending, data, router.push])

  if (isPending) {
    return (
      <div className="min-h-screen grid place-items-center">
        <div className="flex items-center gap-2">
          <Loader2 className="animate-spin" />
          <span>Loading...</span>
        </div>
      </div>
    )
  }

  return children
}

export default RequireAuth
