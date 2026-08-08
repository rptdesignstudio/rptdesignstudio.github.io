import { AfterViewInit, Component, inject } from '@angular/core';
import { STATS } from '../../../../core/data/stats.data';
import { Container } from '../../../../shared/ui/container/container';
import { AnimationService } from '../../../../core/services/animation';

@Component({
  selector: 'app-stats',
  imports: [Container],
  templateUrl: './stats.html',
  styleUrl: './stats.scss',
})
export class Stats implements AfterViewInit {
  
   private animation = inject(AnimationService);

   stats = STATS;

    ngAfterViewInit(): void {

    this.animation.reveal('.stats');

  }
}
