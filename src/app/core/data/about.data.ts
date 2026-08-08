export interface AboutContent {

    storyTitle: string;

    story: string[];

    philosophyTitle: string;

    philosophy: string;

    values: {
        title: string;
        description: string;
    }[];

}

export const ABOUT_CONTENT: AboutContent = {

    storyTitle: 'A studio shaped by curiosity, context and craft',

    story: [

        'RPT Design Studio approaches every project as an opportunity to create spaces that feel considered, functional and enduring.',

        'Our work is guided by careful observation of context, natural light, materiality and the everyday needs of the people who inhabit each space.',

        'Rather than following short-lived trends, we aim to create architecture and interiors with a quiet sense of identity and lasting relevance.'

    ],

    philosophyTitle: 'Architecture should feel natural to the way people live',

    philosophy:
        'We believe good design is not only about how a space looks, but how effortlessly it supports daily life. Every decision — from planning and proportion to material and light — should contribute to a coherent experience.',

    values: [

        {
            title: 'Context',
            description:
                'Every project begins with understanding its site, surroundings and unique conditions.'
        },

        {
            title: 'Clarity',
            description:
                'We value simple, purposeful design decisions that make spaces intuitive and functional.'
        },

        {
            title: 'Craft',
            description:
                'Thoughtful detailing and material choices give each project depth, character and longevity.'
        },

        {
            title: 'Collaboration',
            description:
                'We work closely with clients and project teams to turn ideas into well-resolved spaces.'
        }

    ]

};