import { Component } from '@angular/core';

import { ABOUT_CONTENT } from '../../core/data/about.data';
import { ABOUT_PAGE_TITLE } from '../../core/data/section-title.data';

import { Container } from '../../shared/ui/container/container';
import { SectionTitleComponent } from '../../shared/ui/section-title/section-title';
import { Divider } from '../../shared/ui/divider/divider';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    RouterLink,
    Container,
    SectionTitleComponent,
    Divider
  ],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {

  sectionTitle = ABOUT_PAGE_TITLE;

  about = ABOUT_CONTENT;

}