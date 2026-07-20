import { Component, input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Project } from '../../../../core/models/project.model';

import { Container } from '../../../../shared/ui/container/container';
import { Lightbox } from '../../../../shared/ui/lightbox/lightbox';

@Component({
  selector: 'app-project-gallery',
  standalone: true,
  imports: [
    CommonModule,
    Container,
    Lightbox
  ],
  templateUrl: './project-gallery.html',
  styleUrl: './project-gallery.scss'
})
export class ProjectGalleryComponent {

  project = input.required<Project>();

  lightboxVisible = signal(false);

  selectedIndex = signal(0);

  open(index: number) {

    this.selectedIndex.set(index);

    this.lightboxVisible.set(true);

  }

  close() {

    this.lightboxVisible.set(false);

  }

}