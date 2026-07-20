import { ProjectCategory } from './project-category.enum';
import { ProjectStatus } from './project-status.enum';

export interface Project {

  id: number;

  slug: string;

  title: string;

  subtitle: string;

  category: ProjectCategory;

  year: number;

  location: string;

  area: string;

  status: ProjectStatus;

  featured: boolean;

  coverImage: string;

  gallery: string[];

  description: string;

  philosophy: string;

  services: string[];

  materials: string[];

  awards: string[];

  client: string;

}