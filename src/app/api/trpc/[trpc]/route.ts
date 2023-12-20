import { appRouter } from '@/trpc'
import { fetchRequestHandler } from '@trpc/server/adapters/fetch'

const handler = (req: Request) => {
    //whatever the request is just pass it to the fetchRequestHandler to do the heavy lifting for us
    fetchRequestHandler({
        endpoint: '/api/trpc',
        req,
        router: appRouter,
        //appRouter is literally our backend! huh, a lot of routing
        // client -> express server -> nextjs api -> trpc
        createContext: () => ({})
    })
}

export { handler as GET, handler as POST }