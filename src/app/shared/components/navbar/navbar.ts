import { Component, HostListener } from '@angular/core';
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

  isScrolled = false;

  @HostListener('window:scroll')
  onWindowScroll(): void {

    this.isScrolled = window.scrollY > 80;

  }

}