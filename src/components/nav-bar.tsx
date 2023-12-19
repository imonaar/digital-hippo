"use client"

import Link from "next/link"

import { Icons } from "./icons"
import MaxWidthWrapper from "./max-width-wrapper"
import NavItems from "./nav-items"

export default function NavBar() {
    return (
        <div className="bg-white sticky x-50 top-0 inset-x-0 h-16">
            <header className="relative bg-white">
                <MaxWidthWrapper>
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center">
                            {/* TODO: This is where our mobile nav will live */}
                            <div className="ml-4 flex lg:ml-0">
                                <Link href='/'>
                                    <Icons.logo className="h-10 w-10" />
                                </Link>
                            </div>
                            <div className="hidden z-50 lg:block lg:self-stretch lg:ml-8">
                                <NavItems />
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>
    )
}
