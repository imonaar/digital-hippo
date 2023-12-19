"use client"

import { useEffect, useRef, useState } from "react"

import { PRODUCT_CATEGORIES } from "@/config"
import NavItem from "./nav-item"
import { useOnClickOutside } from "@/hooks/use-onclick-outside"

export default function NavItems() {
    const [activeIndex, setActiveIndex] = useState<null | number>(null)
    const isAnyOpen = activeIndex !== null
    const navRef = useRef<HTMLDivElement | null>(null)
    //This is to know when we are clicking outside

    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                setActiveIndex(null)
            }
        }

        document.addEventListener('keydown', handler)
        return document.removeEventListener('keydown', handler) //cleanup after the component unmounts to prevents mem leaks
    }, [])

    useOnClickOutside(navRef, () => setActiveIndex(null))

    return (
        <div className="flex gap-4 h-full" ref={navRef}>
            {
                PRODUCT_CATEGORIES.map((category, i) => {

                    const handleOpen = () => {
                        if (activeIndex === i) {
                            setActiveIndex(null)
                        } else {
                            setActiveIndex(i)
                        }
                    }

                    const isActive = i === activeIndex

                    return (
                        <NavItem
                            category={category}
                            handleOpen={handleOpen}
                            isOpen={isActive}
                            key={category.value}
                            isAnyOpen={isAnyOpen}
                        />
                    )
                })
            }
        </div>
    )
}

