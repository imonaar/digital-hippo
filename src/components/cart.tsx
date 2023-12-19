"use client"

import Link from "next/link"
import Image from "next/image"

import { ShoppingCartIcon } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetFooter } from "./ui/sheet"
import { Separator } from "./ui/separator"
import { formatPrice } from "@/lib/utils"
import { buttonVariants } from "./ui/button"

export default function Cart() {
    const fee = 1
    const itemCount = 0
    return (
        <Sheet>
            <SheetTrigger className="group -m-2 flex items-center p-2">
                <ShoppingCartIcon
                    aria-hidden
                    className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                />
                <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                    {itemCount}
                </span>
            </SheetTrigger>
            <SheetContent className="flex w-full flex-col pr-0 sm:max-w-lg">
                <SheetHeader className='space-y-2.5 pr-6'>
                    <SheetTitle>
                        Cart ({itemCount})
                    </SheetTitle>
                </SheetHeader>
                {
                    itemCount > 0 ? (
                        <>
                            <div className="flex w-full flex-col pr-6">
                                {/* TODO: cart logic */}
                                Cart Items
                            </div>
                            <div className="space-y-4 pr-6">
                                <Separator />
                                <div className="space-y-1.5 tex-sm">
                                    <div className="flex">
                                        <span className="flex-1">Shipping</span>
                                        <span className="">Free</span>
                                    </div>
                                    <div className="flex">
                                        <span className="flex-1">Transaction Fee</span>
                                        <span className="">{formatPrice(fee)}</span>
                                    </div>
                                    <div className="flex">
                                        <span className="flex-1">Total</span>
                                        <span className="">{formatPrice(fee)}</span>
                                    </div>
                                </div>
                            </div>

                            <SheetFooter>
                                <SheetTrigger asChild>
                                    <Link href='/cart' className={buttonVariants({
                                        className: 'w-full'
                                    })}>
                                        Continue To Checkout
                                    </Link>
                                </SheetTrigger>
                            </SheetFooter>
                        </>
                    ) : (
                        <div className="flex h-full flex-col items-center space-y-1 justify-center">
                            <div aria-hidden={true} className="relative mb-4 h-60 w-60 text-muted-foreground">
                                <Image
                                    src='/hippo-empty-cart.png'
                                    fill
                                    alt='empty shopping cart hippo'
                                />
                            </div>
                            <div className="text-xl font-semibold">
                                Your cart is empty
                            </div>
                            <SheetTrigger asChild>
                                <Link href='/products' className={buttonVariants({
                                    variant: 'link',
                                    size: 'sm',
                                    className: 'text-sm text-muted-foreground'
                                })}>
                                   Add items to your cart to check out.
                                </Link>
                            </SheetTrigger>
                        </div>
                    )
                }
            </SheetContent>
        </Sheet>
    )
}
