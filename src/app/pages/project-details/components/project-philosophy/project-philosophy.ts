import { Component, input } from '@angular/core';

import { Project } from '../../../../core/models/project.model';
import { Container } from '../../../../shared/ui/container/container';

@Component({
  selector: 'app-project-philosophy',
  standalone: true,
  imports: [Container],
  templateUrl: './project-philosophy.html',
  styleUrl: './project-philosophy.scss'
})
export class ProjectPhilosophyComponent {

  project = input.required<Project>();

}