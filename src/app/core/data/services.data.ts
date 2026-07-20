export interface Service {

    id: number;

    title: string;

    description: string;

}

export const SERVICES: Service[] = [

    {
        id: 1,
        title: 'Architectural Design',
        description:
            'Thoughtfully designed residential and commercial spaces that balance aesthetics, functionality, and sustainability.'
    },

    {
        id: 2,
        title: 'Interior Design',
        description:
            'Elegant interior environments crafted with careful attention to materials, lighting, and everyday living.'
    },

    {
        id: 3,
        title: 'Planning & Consultation',
        description:
            'Expert guidance from concept development to execution, ensuring every project achieves its full potential.'
    }

];