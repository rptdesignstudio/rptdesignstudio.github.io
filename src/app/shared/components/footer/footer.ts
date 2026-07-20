import { Component } from '@angular/core';
import { Container } from '../../ui/container/container';

@Component({
  selector: 'app-footer',
  imports: [Container],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {

  year = new Date().getFullYear();
}
