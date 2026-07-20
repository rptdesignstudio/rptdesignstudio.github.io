import { Component, input } from '@angular/core';
import { Project } from '../../../../core/models/project.model';

@Component({
  selector: 'app-project-feature-image',
  standalone: true,
  templateUrl: './project-feature-image.html',
  styleUrl: './project-feature-image.scss'
})
export class ProjectFeatureImageComponent {

  project = input.required<Project>();

}