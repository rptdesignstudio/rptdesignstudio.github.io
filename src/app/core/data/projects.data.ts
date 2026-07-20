import { Project } from '../models/project.model';
import { ProjectCategory } from '../models/project-category.enum';
import { ProjectStatus } from '../models/project-status.enum';

export const PROJECTS: Project[] = [
{
  id: 1,

  slug: 'luxury-villa',

  title: 'Luxury Villa',

  subtitle: 'A Modern Family Residence',

  category: ProjectCategory.Residential,

  year: 2025,

  location: 'Chennai',

  area: '5200 sq.ft',

  status: ProjectStatus.Completed,

  featured: true,

  coverImage: 'assets/images/projects/luxury-villa/cover.webp',

  gallery: [
    'assets/images/projects/luxury-villa/1.webp',
    'assets/images/projects/luxury-villa/2.webp',
    'assets/images/projects/luxury-villa/3.webp'
  ],

  description:
    'A contemporary villa designed around natural light, cross ventilation and seamless indoor-outdoor living.',

  philosophy:
    'The design creates a balance between openness and privacy while maximizing daylight throughout the residence.',

  services: [
    'Architecture',
    'Interior Design',
    'Landscape'
  ],

  materials: [
    'Concrete',
    'Wood',
    'Glass',
    'Natural Stone'
  ],

  awards: [],

  client: 'Private Residence'
},
{
  id: 2,

  slug: 'urban-residence',

  title: 'Urban Residence',

  subtitle: 'Minimal Living in the City',

  category: ProjectCategory.Residential,

  year: 2024,

  location: 'Coimbatore',

  area: '3800 sq.ft',

  status: ProjectStatus.Completed,

  featured: true,

  coverImage: 'assets/images/projects/urban-residence/cover.webp',

  gallery: [
    'assets/images/projects/urban-residence/1.webp',
    'assets/images/projects/urban-residence/2.webp',
    'assets/images/projects/urban-residence/3.webp'
  ],

  description:
    'A compact urban home emphasizing clean geometry and efficient spatial planning.',

  philosophy:
    'Minimalism combined with warm natural materials creates a timeless family home.',

  services: [
    'Architecture',
    'Interior Design'
  ],

  materials: [
    'Concrete',
    'Timber',
    'Glass'
  ],

  awards: [],

  client: 'Private Residence'
},
{
  id: 3,

  slug: 'commercial-office',

  title: 'Commercial Office',

  subtitle: 'Workspace for Innovation',

  category: ProjectCategory.Commercial,

  year: 2023,

  location: 'Bengaluru',

  area: '18000 sq.ft',

  status: ProjectStatus.Completed,

  featured: true,

  coverImage: 'assets/images/projects/commercial-office/cover.webp',

  gallery: [
    'assets/images/projects/commercial-office/1.webp',
    'assets/images/projects/commercial-office/2.webp',
    'assets/images/projects/commercial-office/3.webp'
  ],

  description:
    'A contemporary office building promoting collaboration and flexibility.',

  philosophy:
    'The workspace is designed to encourage interaction while maintaining employee comfort.',

  services: [
    'Architecture',
    'Interior Design',
    'Workspace Planning'
  ],

  materials: [
    'Glass',
    'Steel',
    'Concrete'
  ],

  awards: [],

  client: 'ABC Developers'
}
];