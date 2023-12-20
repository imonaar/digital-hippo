import express from 'express'
import { getPayloadClient } from './get-payload-client'
import { nextApp, nextHandler } from './next-utils'

const app = express()
const PORT = Number(process.env.PORT) || 3000

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