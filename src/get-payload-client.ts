import dotenv from 'dotenv'
import path from 'path'
import type { InitOptions } from 'payload/config'
import payload, { Payload } from 'payload'
import nodemailer from 'nodemailer'

dotenv.config({
    path: path.resolve(__dirname, '../.env'),
})

const transporter = nodemailer.createTransport({
    host: "smtp.resend.com",
    secure: true,
    port: 465,
    auth: {
        user: "resend",
        pass: process.env.RESEND_API_KEY
    }
})

let cached = (global as any).payload

if (!cached) {
    cached = (global as any).payload = {
        client: null,
        promise: null,
    }
}

interface Args {
    initOptions?: Partial<InitOptions>
}

export const getPayloadClient = async ({
    initOptions,
}: Args = {}): Promise<Payload> => {
    if (!process.env.PAYLOAD_SECRET) {
        throw new Error('PAYLOAD_SECRET is missing')
    }

    if (cached.client) {
        return cached.client
    }

    if (!cached.promise) {
        cached.promise = payload.init({
            email: {
                transport: transporter,
                fromAddress: "onboarding@resend.dev",
                fromName: 'DigitalHippo'
            },
            secret: process.env.PAYLOAD_SECRET,
            local: initOptions?.express ? false : true,
            ...(initOptions || {}),
        })
    }

    try {
        cached.client = await cached.promise
    } catch (e: unknown) {
        cached.promise = null
        throw e
    }

    return cached.client
}











// import dotenv from 'dotenv'
// import path from 'path'
// import payload from 'payload'
// import type { InitOptions } from 'payload/config'

// dotenv.config({
//     path: path.resolve(__dirname, '../.env')
// })

// //check if we have a cached version of our cms.
// let cached = (global as any).payload


// //if we dont have a cached version, then do this.
// if (!cached) {
//     cached = (global as any) = {
//         client: null,
//         promise: null
//     }
// }

// interface Args {
//     initOptions?: Partial<InitOptions>
//     //partial is a type decorator 
//     //Think about Partial and other advanced types as a type decorator. 
//     //You should only use them when you already have a type and you want to alter it for the sake of simplicity.
//     //In this example, you are creating the type for the first time, and it is independent of other types.
// }

// export async function getPayloadClient(
//     { initOptions }: Args = {}
// ) {

//     if (!process.env.PAYLOAD_SECRET) {
//         throw new Error('PAYLOAD_SECRET is missing')
//     }

//     //if we have a cached client then return the cached client
//     if (cached.client) {
//         return cached.client
//     }

//     //initialize the promise
//     if (!cached.promise) {
//         cached.promise = payload.init({
//             secret: process.env.PAYLOAD_SECRET,
//             local: initOptions?.express ? false : true,
//             ...(initOptions || {})
//         })
//     }


//     try {
//         //set the cached client here
//         cached.client = await cached.promise
//     } catch (e) {
//         cached.promise = null
//         throw e
//     }

//     return cached.client
// }

// //overview of this file, we created the database client that we can use in our entire application
// //we also made sure to cache it
// //import it where we need a database service



