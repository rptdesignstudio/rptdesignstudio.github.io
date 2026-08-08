import {
  Component,
  computed,
  inject,
  signal
} from '@angular/core';

import { Project } from '../../core/models/project.model';
import { ProjectCategory } from '../../core/models/project-category.enum';

import { ProjectService } from '../../core/services/project';

import { PROJECTS_PAGE_TITLE } from '../../core/data/section-title.data';

import { Container } from '../../shared/ui/container/container';
import { SectionTitleComponent } from '../../shared/ui/section-title/section-title';
import { Divider } from '../../shared/ui/divider/divider';

import { ProjectCard } from '../../shared/components/project-card/project-card';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    Container,
    SectionTitleComponent,
    Divider,
    ProjectCard
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {

  private projectService = inject(ProjectService);

  sectionTitle = PROJECTS_PAGE_TITLE;

  categories = [

    'All',

    ...Object.values(ProjectCategory)

  ];

  selectedCategory = signal<string>('All');

  searchText = signal('');

  projects = this.projectService.getProjects();

  filteredProjects = computed(() => {

    const category = this.selectedCategory();

    const search = this.searchText().trim().toLowerCase();

    return this.projects.filter(project => {

      const matchesCategory =

        category === 'All' ||

        project.category === category;

      const matchesSearch =

        project.title.toLowerCase().includes(search) ||

        project.location.toLowerCase().includes(search);

      return matchesCategory && matchesSearch;

    });

  });

  selectCategory(category: string): void {

    this.selectedCategory.set(category);

  }

  onSearch(event: Event): void {

    const input = event.target as HTMLInputElement;

    this.searchText.set(input.value);

  }

}