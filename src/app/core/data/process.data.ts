export interface ProcessStep {

    step: string;

    title: string;

    description: string;

}

export const PROCESS_STEPS: ProcessStep[] = [

    {

        step: '01',

        title: 'Discovery',

        description:
            'We begin by understanding your aspirations, lifestyle, site context and project goals.'

    },

    {

        step: '02',

        title: 'Concept Design',

        description:
            'Ideas are explored through sketches, diagrams and spatial planning to shape the project vision.'

    },

    {

        step: '03',

        title: 'Design Development',

        description:
            'Technical drawings, materials and detailing are refined while coordinating every aspect of the design.'

    },

    {

        step: '04',

        title: 'Execution',

        description:
            'We collaborate closely throughout construction to ensure the design is realized with precision.'

    }

];