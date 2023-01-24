import { publicProcedure, router } from '../trpc';

export const habitRouter = router({
  getAll: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.habit.findMany();
  })
});
