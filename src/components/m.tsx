"use client"

import * as React from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import Image from "next/image"

import { PRODUCT_CATEGORIES } from '@/config'

import {
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

type Category = (typeof PRODUCT_CATEGORIES)[number]

interface NavItemProps {
    category: Category
    key: string
}

export const NavItem = ({
    category, key
}: NavItemProps) => {
    return (
        <NavigationMenuItem key={key}>
            <NavigationMenuTrigger>UI Kits</NavigationMenuTrigger>
            <NavigationMenuContent>
                <div className='relative bg-white'>
                    <div className='mx-auto max-w-7xl px-8'>
                        <div className='grid grid-cols-4 gap-x-8 gap-y-10 py-16'>
                            <div className='col-span-4 col-start-1 grid grid-cols-3 gap-x-8'>
                                {category.featured.map((item) => (
                                    <div
                                        onClick={() => close}
                                        key={item.name}
                                        className='group relative text-base sm:text-sm'>
                                        <div className='relative aspect-video overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75'>
                                            <Image
                                                src={item.imageSrc}
                                                alt='product category image'
                                                fill
                                                className='object-cover object-center'
                                            />
                                        </div>

                                        <Link
                                            href={item.href}
                                            className='mt-6 block font-medium text-gray-900'>
                                            {item.name}
                                        </Link>
                                        <p
                                            className='mt-1'
                                            aria-hidden='true'>
                                            Shop now
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </NavigationMenuContent>
        </NavigationMenuItem>


    )
}

const ListItem = React.forwardRef<
    React.ElementRef<"a">,
    React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
    return (
        <li>
            <NavigationMenuLink asChild>
                <a
                    ref={ref}
                    className={cn(
                        "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        className
                    )}
                    {...props}
                >
                    <div className="text-sm font-medium leading-none">{title}</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
})
ListItem.displayName = "ListItem"
