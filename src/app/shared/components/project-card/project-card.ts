import { Component, input } from '@angular/core';
import { Project } from '../../../core/models/project.model';
import { ImageFrame } from '../../ui/image-frame/image-frame';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [ImageFrame, RouterLink],
  templateUrl: './project-card.html',
  styleUrl: './project-card.scss'
})
export class ProjectCard {

  project = input.required<Project>();

}