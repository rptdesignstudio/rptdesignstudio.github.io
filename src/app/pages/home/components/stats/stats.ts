import { Component } from '@angular/core';
import { STATS } from '../../../../core/data/stats.data';
import { Container } from '../../../../shared/ui/container/container';

@Component({
  selector: 'app-stats',
  imports: [Container],
  templateUrl: './stats.html',
  styleUrl: './stats.scss',
})
export class Stats {
   stats = STATS;
}
