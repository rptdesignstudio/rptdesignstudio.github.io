import { Component } from '@angular/core';

import { SERVICES } from '../../core/data/services.data';
import { SERVICES_PAGE_TITLE } from '../../core/data/section-title.data';

import { Container } from '../../shared/ui/container/container';
import { SectionTitleComponent } from '../../shared/ui/section-title/section-title';
import { Divider } from '../../shared/ui/divider/divider';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-service',
  standalone: true,
  imports: [
    Container,
    SectionTitleComponent,
    Divider,
    RouterLink
  ],
  templateUrl: './service.html',
  styleUrl: './service.scss'
})
export class Service {

  services = SERVICES;

  sectionTitle = SERVICES_PAGE_TITLE;

}