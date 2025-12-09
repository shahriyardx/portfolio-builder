"use client"

import { Field } from "./ui/field"
import { Button } from "./ui/button"
import { AiOutlineGithub, AiOutlineGoogle } from "react-icons/ai"
import { authClient } from "@/lib/auth-client"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

const SocialLogin = () => {
  const router = useRouter()

  return (
    <Field className="grid grid-cols-2 gap-4">
      <Button
        onClick={() =>
          authClient.signIn.social({
            provider: "google",
          })
        }
        variant="outline"
        type="button"
      >
        <AiOutlineGoogle />
        <span className="sr-only">Google</span>
      </Button>
      <Button
        onClick={async () => {
          await authClient.signIn.social(
            {
              provider: "github",
              callbackURL: "/dashboard",
            },
            {
              onError: (context) => {
                toast.error(context.error.message)
              },
            },
          )
        }}
        variant="outline"
        type="button"
      >
        <AiOutlineGithub />
        <span className="sr-only">Github</span>
      </Button>
    </Field>
  )
}

export default SocialLogin
