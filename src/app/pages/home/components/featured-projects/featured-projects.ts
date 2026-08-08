import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { ProjectCard } from '../../../../shared/components/project-card/project-card';
import { ProjectService } from '../../../../core/services/project';
import { Project } from '../../../../core/models/project.model';
import { PROJECT_SECTION_TITLE } from '../../../../core/data/section-title.data';
import { SectionTitleComponent } from '../../../../shared/ui/section-title/section-title';
import { Divider } from '../../../../shared/ui/divider/divider';
import { Container } from '../../../../shared/ui/container/container';
import { AnimationService } from '../../../../core/services/animation';

@Component({
  selector: 'app-featured-projects',
  standalone: true,
  imports: [ProjectCard, SectionTitleComponent, Divider, Container],
  templateUrl: './featured-projects.html',
  styleUrl: './featured-projects.scss'
})
export class FeaturedProjects implements OnInit, AfterViewInit {
  
  private animation = inject(AnimationService);

  private projectService = inject(ProjectService);

  projects: Project[] = [];

  sectionTitle = PROJECT_SECTION_TITLE;
  
  ngOnInit(): void {

    this.projects = this.projectService.getFeaturedProjects();

  }

  ngAfterViewInit(): void {

  this.animation.reveal('.featured-projects');

  this.animation.stagger(
    '.project-card',
    '.projects-grid'
  );

}


}