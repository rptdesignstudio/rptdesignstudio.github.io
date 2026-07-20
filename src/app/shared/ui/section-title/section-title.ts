import { Component, input } from '@angular/core';
import { SectionTitle } from '../../../core/models/section-title.model';

@Component({
  selector: 'app-section-title',
  imports: [],
  templateUrl: './section-title.html',
  styleUrl: './section-title.scss',
})
export class SectionTitleComponent {

  content = input.required<SectionTitle>();
}
