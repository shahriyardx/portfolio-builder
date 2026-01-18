import { createTRPCRouter } from "../init"
import { portfolioRouter } from "./portfolio.router"

export const appRouter = createTRPCRouter({
  portfolio: portfolioRouter,
})
// export type definition of API
export type AppRouter = typeof appRouter
