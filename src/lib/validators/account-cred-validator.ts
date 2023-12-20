import { z } from 'zod'

export const AuthCredentialsValidator = z.object({
    email: z.string().email(),
    password: z.string()
        .min(6, { message: 'Pssword must be atleast 6 characters long' })
})


export type TAuthCredentialsValidator = z.infer<typeof AuthCredentialsValidator>