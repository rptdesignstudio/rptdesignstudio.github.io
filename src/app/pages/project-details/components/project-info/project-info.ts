import { Component, input } from '@angular/core';
import { Project } from '../../../../core/models/project.model';
import { Container } from '../../../../shared/ui/container/container';


@Component({
  selector: 'app-project-info',
  standalone: true,
  imports: [Container],
  templateUrl: './project-info.html',
  styleUrl: './project-info.scss'
})
export class ProjectInfoComponent {

  project = input.required<Project>();

}