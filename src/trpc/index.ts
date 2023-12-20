import { publicProcedure, router } from './trpc'
import { authRouter } from './routers/auth-router';

//this is our backend
export const appRouter = router({
    auth: authRouter
})

export type TAppRouter = typeof appRouter;