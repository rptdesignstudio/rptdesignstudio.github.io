import { AfterViewInit, Component, inject } from '@angular/core';
import { Container } from '../../../../shared/ui/container/container';
import { ImageFrame } from '../../../../shared/ui/image-frame/image-frame';
import { AnimationService } from '../../../../core/services/animation';

@Component({
  selector: 'app-studio-philosophy',
  imports: [Container, ImageFrame],
  templateUrl: './studio-philosophy.html',
  styleUrl: './studio-philosophy.scss',
})
export class StudioPhilosophy implements AfterViewInit{

  private animation = inject(AnimationService);

  ngAfterViewInit(): void {

    this.animation.reveal('.philosophy');

  }

}
