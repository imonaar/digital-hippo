import { AuthCredentialsValidator } from "../../lib/validators/account-cred-validator";
import { publicProcedure, router } from "../trpc";
import { getPayloadClient } from "../../get-payload-client";
import { TRPCError } from "@trpc/server";

export const authRouter = router({
    createPayloadUser: publicProcedure
        .input(AuthCredentialsValidator)
        .mutation(async ({ input }) => {
            //first we need the email and password that the user sent along.
            const { email, password } = input
            //we need access to our cms in order to be able to create a user
            const payload = await getPayloadClient()

            //check if a user already exists

            const { docs: users } = await payload.find({
                collection: "users",
                where: {
                    email: {
                        equals: email
                    }
                }
            })

            //operation found a new user which it shouldnt because we are trying to sign up a new user.
            if (users.length !== 0) throw new TRPCError({ code: 'CONFLICT' })

            //no user with current email


            await payload.create({
                //we want a custom users table
                collection: "users",
                data: {
                    email,
                    password,
                    role: 'user'
                }
            })
            return { success: true, sentToEmail: email }
        })
})