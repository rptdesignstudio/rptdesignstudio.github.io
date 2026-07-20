import { Component, input } from '@angular/core';
import { ImageFrameVariant } from '../../../core/models/image-frame.model';

@Component({
  selector: 'app-image-frame',
  imports: [],
  templateUrl: './image-frame.html',
  styleUrl: './image-frame.scss',
})
export class ImageFrame {
    src = input.required<string>();


    alt = input<string>('Architecture image');


    variant = input<ImageFrameVariant>('default');

}
