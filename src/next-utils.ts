import next from "next"

const PORT = Number(process.env.PORT) || 3000

export const nextApp = next({
    dev: process.env.NODE_ENV !== 'production',
    port: PORT,
})

export const nextHandler = nextApp.getRequestHandler()
//if you want to self host nextjs this is how you do it;