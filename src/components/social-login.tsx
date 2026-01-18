"use client"

import { Field } from "./ui/field"
import { Button } from "./ui/button"
import { AiOutlineGithub } from "react-icons/ai"
import { authClient } from "@/lib/auth/auth-client"
import { toast } from "sonner"

const SocialLogin = () => {
  return (
    <Field>
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
