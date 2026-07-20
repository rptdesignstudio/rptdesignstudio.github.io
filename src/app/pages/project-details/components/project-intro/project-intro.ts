import { Component, input } from '@angular/core';
import { Project } from '../../../../core/models/project.model';
import { Container } from '../../../../shared/ui/container/container';

@Component({
  selector: 'app-project-intro',
  standalone: true,
  imports: [Container],
  templateUrl: './project-intro.html',
  styleUrl: './project-intro.scss'
})
export class ProjectIntroComponent {

  project = input.required<Project>();

}