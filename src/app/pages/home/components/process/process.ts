import { Component } from '@angular/core';

import { Container } from '../../../../shared/ui/container/container';
import { SectionTitleComponent } from '../../../../shared/ui/section-title/section-title';
import { Divider } from '../../../../shared/ui/divider/divider';

import { PROCESS_STEPS } from '../../../../core/data/process.data';

@Component({
    selector: 'app-process',
    standalone: true,
    imports: [
        Container,
        SectionTitleComponent,
        Divider
    ],
    templateUrl: './process.html',
    styleUrl: './process.scss'
})
export class ProcessComponent {

    process = PROCESS_STEPS;

    sectionTitle = {

        eyebrow: 'OUR PROCESS',

        title: 'A collaborative journey from vision to reality',

        description:
            'Every project follows a structured design process that balances creativity, technical excellence and attention to detail.'

    };

}