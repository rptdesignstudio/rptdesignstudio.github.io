import { Component, HostListener, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

import { NAVIGATION_ITEMS } from '../../../core/data/navigation.data';
import { Container } from '../../ui/container/container';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    Container
  ],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss'
})
export class Navbar {

  navigationItems = NAVIGATION_ITEMS;
 
  isScrolled = signal(false);

 @HostListener('window:scroll')
  onScroll(): void {

    this.isScrolled.set(window.scrollY > 30);

  }


}