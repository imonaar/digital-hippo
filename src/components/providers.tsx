"use client"

import { PropsWithChildren, useState } from "react";

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
//this will allow us to use react-query
//TRPC is just a thin client around react-query which provide full type-safety

import { trpc } from "@/trpc/client";
import { httpBatchLink } from "@trpc/client";

//This Providers will enable us to use trpc throughout the entire frontend.
const Providers = ({ children }: PropsWithChildren) => {
    const [queryClient] = useState(() => new QueryClient())
    const [trpcClient] = useState(() => trpc.createClient({
        links: [
            httpBatchLink({
                url: `${process.env.NEXT_PUBLIC_SERVER_URL}/api/trpc`,
                fetch(url, options) {
                    return fetch(url, {
                        ...options,
                        credentials: "include"
                    })
                }
            })
            //batch requests together for maximum performance
        ]
    }))

    return (
        <trpc.Provider
            client={trpcClient}
            queryClient={queryClient}
        >
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </trpc.Provider>
    )
}

export default Providers;