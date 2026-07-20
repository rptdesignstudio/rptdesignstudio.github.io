import { Component, input } from '@angular/core';

import { Project } from '../../../../core/models/project.model';

@Component({
  selector: 'app-project-hero',
  standalone: true,
  templateUrl: './project-hero.html',
  styleUrl: './project-hero.scss'
})
export class ProjectHeroComponent {

  project = input.required<Project>();

}