import { Component } from '@angular/core';
import { Container } from '../../../../shared/ui/container/container';
import { ImageFrame } from '../../../../shared/ui/image-frame/image-frame';

@Component({
  selector: 'app-studio-philosophy',
  imports: [Container, ImageFrame],
  templateUrl: './studio-philosophy.html',
  styleUrl: './studio-philosophy.scss',
})
export class StudioPhilosophy {}
