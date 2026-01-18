import { createTRPCRouter, protectedProcedure } from "../init"

export const portfolioRouter = createTRPCRouter({
  update: protectedProcedure.mutation(async () => {
    console.log("Called")
    return {}
  }),
})
