import { createTRPCReact } from '@trpc/react-query'
import type { TAppRouter } from '.'

//this generic will contain the entirity of our backend
// just like that the frontend knows about our backend.
// thus end to end type safety
export const trpc = createTRPCReact<TAppRouter>({})