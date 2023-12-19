"use client"

import React from 'react'
import { Button } from './ui/button'
import { PRODUCT_CATEGORIES } from '@/config'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

type Category = typeof PRODUCT_CATEGORIES[number]

interface NavItemProps {
    category: Category;
    handleOpen: () => void;
    isOpen: boolean;
    isAnyOpen: boolean;
    key: number
}

export default function NavItem({ category, handleOpen, isOpen, isAnyOpen, key }: NavItemProps) {
    return (
        <div className='flex' >
            <div className='flex relative items-center'>
                {/* This button is what is displayed on the navigation bar */}
                <Button
                    className='gap-1.5'
                    onClick={handleOpen}
                    variant={isOpen ? 'secondary' : 'ghost'}
                >
                    {category.label}
                    <ChevronDown className={cn('h-4 w-4 transition-all text-muted-foreground', {
                        '-rotate-180': isOpen
                    })} />
                </Button>

                {
                    isOpen ? (
                        <div className={cn('absolute inset-x-0 top-full text-sm text-muted-foreground', {
                            'animate-in fade-in-10 slide-in-from-top-5 ': !isOpen
                        })}>
                            <div
                                className='absolute inset-0 top-1/2 bg-white shadow'
                                aria-hidden={true}
                            />
                            <div className='mx-auto max-w-7xl px-8'>
                                <div className='grid grid-cols-4 gap-x-8 p-16'>
                                    <div className='col-span-4 col-start-1 grid grid-cols-3 gap-x-8'>
                                        {category.featured.map((items) => (
                                            <div
                                                key={items.name}
                                                className
                                            >

                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : null
                }
            </div>
        </div>
    )
}
