"use client"

import { useState } from "react"

import { PRODUCT_CATEGORIES } from "@/config"
import NavItem from "./nav-item"

export default function NavItems() {
    const [activeIndex, setActiveIndex] = useState<null | number>(null)
    const isAnyOpen = activeIndex !== null

    return (
        <div className="flex gap-4 h-full">
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
