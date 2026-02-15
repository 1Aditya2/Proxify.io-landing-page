export const carouselItems = [
    {
        name: "Cristian S.",
        role: "Senior BI Developer",
        skills: ["Microsoft Power BI", "SQL"],
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    {
        name: "Cristian S.",
        role: "Senior BI Developer",
        skills: ["Microsoft Power BI", "SQL"],
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    {
        name: "Cristian S.",
        role: "Senior BI Developer",
        skills: ["Microsoft Power BI", "SQL"],
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    {
        name: "Cristian S.",
        role: "Senior BI Developer",
        skills: ["Microsoft Power BI", "SQL"],
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    {
        name: "Cristian S.",
        role: "Senior BI Developer",
        skills: ["Microsoft Power BI", "SQL"],
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
    {
        name: "Cristian S.",
        role: "Senior BI Developer",
        skills: ["Microsoft Power BI", "SQL"],
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    }
];
export const NavItems = [
    {
        type: 'dropdown',
        label: 'Why Proxify',
        services: [
            "Web Development",
            "Data Science",
            "DevOps",
            "Cloud Engineering",
        ]
    },
    {
        type: 'dropdown',
        label: 'Solutions',
        services: [
            "Web Development",
            "Data Science",
            "DevOps",
            "Cloud Engineering",
        ]
    },
    {
        type: 'text',
        label: 'Pricing'
    },
    {
        type: 'text',
        label: 'Enterprise'
    },
    {
        type: 'dropdown',
        label: 'Resources',
        services: [
            "Web Development",
            "Data Science",
            "DevOps",
            "Cloud Engineering",
        ]
    }
];

export const gridData = [
    {
        title: 'A core team member, not just a freelancer',
        desc: 'Proxify developers are vetted to ensure they can deliver quality on business-critical code, no different to your in-house staff.',
        btn: 'See vetting process',
        className: 'bg-primary-50'
    },
    {
        title: 'A core team member, not just a freelancer',
        desc: 'Proxify developers are vetted to ensure they can deliver quality on business-critical code, no different to your in-house staff.',
        btn: 'See vetting process',
        className: 'bg-green-100'
    },
    {
        title: 'A core team member, not just a freelancer',
        desc: 'Proxify developers are vetted to ensure they can deliver quality on business-critical code, no different to your in-house staff.',
        btn: 'See vetting process',
        className: 'bg-gray-100'
    }
];

export const tabData = [
    'Software Product Engineering',
    'Data and Artificial Intelligence',
    'Cloud and Infrastructure',
    'Quality assurance',
    'Design'
];
export const accordionOnTab = {
    'Software Product Engineering': [{
        headerValue: 'Backend',
        skills: ['UI/UX', 'Node'],
        userCards: [
            ...carouselItems.slice(0,4)
        ]
    },
    {
        headerValue: 'Frontend',
        skills: ['UI/UX', 'React'],
        userCards: [
            ...carouselItems.slice(0,4)
        ]
    }
    ],
    'Data and Artificial Intelligence': [
        {
            headerValue: 'AI/ML',
            skills: ['SciKit', 'AIML'],
            userCards: [
                ...carouselItems.slice(0,2)
            ]
        }
    ],
    'Cloud and Infrastructure': [
        {
            headerValue: 'Frontend',
            skills: ['UI/UX', 'React'],
            userCards: [
                ...carouselItems.slice(0,2)
            ]
        }
    ],
    'Quality assurance': [
        {
            headerValue: 'AI/ML',
            skills: ['SciKit', 'AIML'],
            userCards: [
                ...carouselItems.slice(0,1)
            ]
        }
    ],
    'Design': [
        {
            headerValue: 'Backend',
            skills: ['UI/UX', 'Node'],
            userCards: [
                ...carouselItems.slice(0,3)
            ]
        },
        {
            headerValue: 'Frontend',
            skills: ['UI/UX', 'React'],
            userCards: [
                ...carouselItems.slice(0,2)
            ]
        }
    ]
};


export const FAQAccordion = [
    {
        title: 'How long does it take to get started?',
        content: 'We can match the right developer to your company within days, not weeks or months. We will present as many relevant, pre-vetted candidates as necessary and the choice is always yours.'
    },
    {
        title: 'How can Proxify be sure that its the developer my company needs?',
        content: 'In short, because our recruitment and vetting process is as comprehensive as it gets. We aim to fully understand our clients’ needs before setting out to find and present the right developer.'
    },
    {
        title: 'Do the developers speak English?',
        content: 'Yes, all our developers speak English fluently. They also possess great communication skills. These are a key requirement for us when trying to attract the best developers to join, and it forms an integral part of the vetting process.'
    },
    {
        title: 'How long does',
        content: 'We can match the right developer to your company within days, not weeks or months. We will present as many relevant, pre-vetted candidates as necessary and the choice is always yours.'
    },
    {
        title: 'Does Proxify take care of leading the project?',
        content: 'In short, because our recruitment and vetting process is as comprehensive as it gets. We aim to fully understand our clients’ needs before setting out to find and present the right developer.'
    },
    {
        title: 'How many hours per week can I hire Proxify developers?',
        content: 'Yes, all our developers speak English fluently. They also possess great communication skills. These are a key requirement for us when trying to attract the best developers to join, and it forms an integral part of the vetting process.'
    }
];

export const navItems = [
    {
        header: 'Why Proxify?',
        list: ['Speed', 'Quality', 'Transparency', 'Flexible', 'Cost-effectiveness']
    },
    {
        header: 'Pricing',
        list: ['Pricing', 'FAQ']
    },
    {
        header: 'Company',
        list: ['About us', 'Career', 'Enterprise', 'Vetting', 'Matching']
    },
    {
        header: 'Resources',
        list: ['Speed', 'Quality', 'Transparency', 'Flexible', 'Cost-effectiveness', 'Career', 'Vetting']
    }
];

export const bottomNavItems = [
    'Impressum',
    'Privacy policy',
    'Cookie policy',
    'Accessibility',
    'Referral terms and conditions'
]