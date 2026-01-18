import { cn } from "@/lib/utils"
import type { ComponentProps } from "react"

const Container = ({
  children,
  className,
  ...props
}: ComponentProps<"div">) => {
  return (
    <div
      className={cn(className, "container mx-auto px-4 sm:px-6 lg:px-8")}
      {...props}
    >
      {children}
    </div>
  )
}

export default Container
