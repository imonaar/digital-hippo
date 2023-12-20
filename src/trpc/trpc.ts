import { initTRPC } from "@trpc/server";

//will serve the purpose of giving us the router that lets us define our entire backend

const t = initTRPC.context().create()

export const router = t.router
export const publicProcedure = t.procedure
//anyone will be able to call this endpoint.