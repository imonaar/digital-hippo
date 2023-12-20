import express, { urlencoded } from 'express'
import { getPayloadClient } from './get-payload-client'
import { nextApp, nextHandler } from './next-utils'
import * as trpcExpress from '@trpc/server/adapters/express'
import { appRouter } from './trpc'

//We are using express here so that we can self host anywhere outside the vercel platform
//express here is intercepting the requesting and rerouting them to nextjs to handle them. This include
//both client and api requests. we also need to pass the req, and res to nextjs --> thus createContext
const app = express()
const PORT = Number(process.env.PORT) || 3000

const createContext = ({ req, res }: trpcExpress.CreateExpressContextOptions) => ({
    req, res
    //by doing this we are able to make them available to our next js api endpoints
})

const init = async () => {
    const payload = await getPayloadClient({
        initOptions: {
            express: app,
            onInit: async (cms) => {
                //we get passed our cms into the app
                cms.logger.info(`Admin URL ${cms.getAdminURL()}`)
                // log out the url where our admin dashboard will live
            }
            // as easy as that we have a working database client we can use anywhere in our nextjs app
        },

    })

    //when we get a trpc request in our server (because we are self hosting) we can simply forward that to next nextjs
    //to handle it. forward it to trpc in nextjs

    app.use('/api/trpc', trpcExpress.createExpressMiddleware({
        //handle the request using this middleware
        router: appRouter,
        createContext
        //createContext allows us to take something from expressi.e req res we get from express and then attach them to a context
        //to allow us to use them also in nextjs
    }))

    app.use((req, res) => nextHandler(req, res))
    nextApp.prepare().then(() => {
        payload.logger.info('Nextjs app started!')

        app.listen(PORT, async () => {
            `Next.js App Url: ${process.env.NEXT_PUBLIC_SERVER_URL}`
        })
    })

    //TO MAKE IT START FROM OUR CUSTOM SERVER, CHANGE NEXT DEV ON PACKAGE.JSON
}

init()