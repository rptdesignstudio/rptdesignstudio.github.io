import { Injectable } from '@angular/core';

import { PROJECTS } from '../data/projects.data';
import { Project } from '../models/project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projects = PROJECTS;

  getProjects(): Project[] {
    return this.projects;
  }

  getFeaturedProjects(): Project[] {
    return this.projects.filter(project => project.featured);
  }

  getProjectBySlug(slug: string): Project | undefined {
    return this.projects.find(project => project.slug === slug);
  }

}