import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Project } from '../../core/models/project.model';

import { Container } from '../../shared/ui/container/container';
import { ProjectService } from '../../core/services/project';
import { ProjectHeroComponent } from './components/project-hero/project-hero';
import { ProjectIntroComponent } from './components/project-intro/project-intro';
import { ProjectInfoComponent } from './components/project-info/project-info';
import { ProjectPhilosophyComponent } from './components/project-philosophy/project-philosophy';
import { ProjectFeatureImageComponent } from './components/project-feature-image/project-feature-image';
import { ProjectServicesComponent } from './components/project-services/project-services';
import { ProjectGalleryComponent } from './components/project-gallery/project-gallery';

@Component({
  selector: 'app-project-details',
  standalone: true,
  imports: [
    ProjectHeroComponent,
    ProjectIntroComponent,
    ProjectInfoComponent,
    ProjectPhilosophyComponent,
    ProjectFeatureImageComponent,
    ProjectServicesComponent,
    ProjectGalleryComponent
  ],
  templateUrl: './project-details.html',
  styleUrl: './project-details.scss'
})
export class ProjectDetailsComponent implements OnInit {

  private readonly route = inject(ActivatedRoute);

  private readonly projectService = inject(ProjectService);

  project?: Project;

  ngOnInit(): void {

    const slug = this.route.snapshot.paramMap.get('slug');

    if (slug) {

      this.project = this.projectService.getProjectBySlug(slug);

    }

  }

}