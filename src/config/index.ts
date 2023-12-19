export const PRODUCT_CATEGORIES = [
    {
        label: 'UI Kits',
        value: 'ui-kits' as const,
        // as const means not any string but specifically ui-kits
        featured: [
            {
                name: 'Editor Picks',
                href: '#',
                imageSrc:'/nav/ui-kits/mixed.jpg'
            },
            {
                name: 'New arrivals',
                href: '#',
                imageSrc: '/nav/ui-kits/blue.jpg'
            },

            {
                name: 'Bestsellers',
                href: '#',
                imageSrc: '/nav/ui-kits/purple.jpg'
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
                imageSrc: '/nav/icons/picks.jpg'
            },
            {
                name: 'New arrivals',
                href: '#',
                imageSrc: '/nav/icons/new.jpg'
            },

            {
                name: 'Bestselling Icons',
                href: '#',
                imageSrc: '/nav/icons/bestsellers.jpg'
            }
        ]
    }
]