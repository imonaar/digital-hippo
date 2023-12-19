export const PRODUCT_CATEGORIES = [
    {
        label: 'UI Kits',
        value: 'ui-kits' as const,
        // as const means not any string but specifically ui-kits
        featured: [
            {
                name: 'Editor Picks',
                href: '#',
                imageSrc:'/nav/ui-kits/mixed.jpeg'
            },
            {
                name: 'New arrivals',
                href: '#',
                imageSrc: '/nav/ui-kits/blue.jpeg'
            },

            {
                name: 'Bestsellers',
                href: '#',
                imageSrc: '/nav/ui-kits/purple.jpeg'
            }
        ]
    },
    {
        label: 'Icons',
        value: 'icons' as const,
        // as const means not any string but specifically ui-kits
        //for value we need somethin that is seializable thus no spaces
        featured: [
            {
                name: 'Favorite Icon Picks',
                href: '#',
                imageSrc: '/nav/icons/picks.jpeg'
            },
            {
                name: 'New arrivals',
                href: '#',
                imageSrc: '/nav/icons/new.jpeg'
            },

            {
                name: 'Bestselling Icons',
                href: '#',
                imageSrc: '/nav/icons/bestsellers.jpeg'
            }
        ]
    }
]