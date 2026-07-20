import { Component, input } from '@angular/core';
import { Project } from '../../../../core/models/project.model';
import { Container } from '../../../../shared/ui/container/container';

@Component({
  selector: 'app-project-services',
  standalone: true,
  imports: [Container],
  templateUrl: './project-services.html',
  styleUrl: './project-services.scss'
})
export class ProjectServicesComponent {

  project = input.required<Project>();

}