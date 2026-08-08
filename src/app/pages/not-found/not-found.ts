import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Container } from '../../shared/ui/container/container';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [
    RouterLink,
    Container
  ],
  templateUrl: './not-found.html',
  styleUrl: './not-found.scss'
})
export class NotFound {

}