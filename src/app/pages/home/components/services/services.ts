import { Component } from '@angular/core';
import { SERVICES } from '../../../../core/data/services.data';
import { SectionTitleComponent } from '../../../../shared/ui/section-title/section-title';
import { Container } from '../../../../shared/ui/container/container';
import { Divider } from '../../../../shared/ui/divider/divider';

@Component({
  selector: 'app-services',
  imports: [SectionTitleComponent, Container, Divider],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  services = SERVICES;

    sectionTitle = {
        eyebrow: 'OUR SERVICES',
        title: 'Designing spaces with purpose',
        description:
            'We offer comprehensive architectural and interior design services, guiding every project from concept to completion.'
    };

}
