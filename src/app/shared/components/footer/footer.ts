import { Component } from '@angular/core';
import { Container } from '../../ui/container/container';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [Container, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {

  year = new Date().getFullYear();
}
