import { Component } from '@angular/core';
import { Hero } from './components/hero/hero';
import { FeaturedProjects } from './components/featured-projects/featured-projects';
import { StudioPhilosophy } from './components/studio-philosophy/studio-philosophy';
import { Stats } from './components/stats/stats';
import { Services } from './components/services/services';
import { ProcessComponent } from './components/process/process';

@Component({
  selector: 'app-home',
  imports: [Hero, FeaturedProjects, StudioPhilosophy, Stats, Services, ProcessComponent],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
