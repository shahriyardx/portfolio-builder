import { authClient } from "@/lib/auth-client"

const useSession = () => {
  const { data, ...others } = authClient.useSession()
  const updatedData = data
    ? {
        ...data,
        user: {
          ...data.user,
          initials: data.user.name.trim().slice(0, 2),
        },
      }
    : null

  return { data: updatedData, ...others }
}

export default useSession
