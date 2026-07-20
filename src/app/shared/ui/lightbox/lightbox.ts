import {
  Component,
  effect,
  HostListener,
  input,
  output,
  signal
} from '@angular/core';

@Component({
  selector: 'app-lightbox',
  standalone: true,
  templateUrl: './lightbox.html',
  styleUrl: './lightbox.scss'
})
export class Lightbox {

  images = input.required<string[]>();

  startIndex = input(0);

  closed = output<void>();

  currentIndex = signal(0);

  constructor() {
    effect(() => {
      this.currentIndex.set(this.startIndex());
    });
  }

  currentImage(): string {
    return this.images()[this.currentIndex()];
  }

  previous(): void {
    if (this.currentIndex() > 0) {
      this.currentIndex.update(index => index - 1);
    }
  }

  next(): void {
    if (this.currentIndex() < this.images().length - 1) {
      this.currentIndex.update(index => index + 1);
    }
  }

  close(): void {
    this.closed.emit();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    this.close();
  }

  @HostListener('document:keydown.arrowleft')
  onArrowLeft(): void {
    this.previous();
  }

  @HostListener('document:keydown.arrowright')
  onArrowRight(): void {
    this.next();
  }

}