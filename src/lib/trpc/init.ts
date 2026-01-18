import { auth } from "@/lib/auth/auth"
import { initTRPC, TRPCError } from "@trpc/server"
import type { Session, User } from "better-auth"
import SuperJSON from "superjson"

export type TRPCContext = {
  session: {
    user: User
    session: Session
  } | null
}

export const createTRPCContext = async ({
  req,
}: {
  req: Request
}): Promise<TRPCContext> => {
  const authSession = await auth.api.getSession({
    headers: req.headers,
  })

  return {
    session: authSession,
  }
}

const t = initTRPC.context<TRPCContext>().create({
  transformer: SuperJSON,
})

const isAuthenticated = t.middleware(({ ctx, next }) => {
  if (!ctx.session) {
    throw new TRPCError({
      code: "UNAUTHORIZED",
      message: "You are not authenticated",
    })
  }
  return next({
    ctx: {
      ...ctx,
      session: ctx.session,
    },
  })
})

export const createTRPCRouter = t.router
export const createCallerFactory = t.createCallerFactory
export const baseProcedure = t.procedure
export const protectedProcedure = t.procedure.use(isAuthenticated)
