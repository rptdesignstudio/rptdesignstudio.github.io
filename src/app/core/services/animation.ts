import { Injectable } from '@angular/core';

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Injectable({
  providedIn: 'root'
})

export class AnimationService {

  animateHero() {

    const tl = gsap.timeline();

    tl.from('.hero__subtitle', {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    });

    tl.from('.hero h1', {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: 'power3.out'
    }, '-=0.4');

    tl.from('.hero__description', {
      y: 40,
      opacity: 0,
      duration: 0.8
    }, '-=0.5');

    tl.from('.hero__actions', {
      y: 30,
      opacity: 0,
      duration: 0.7
    }, '-=0.4');

    tl.from('.logo', {

        opacity: 0,

        x: -40,

        duration: 0.7

    });
    
    tl.from('.navbar li', {

        y: -20,

        opacity: 0,

        stagger: 0.08,

        duration: 0.5

    }, '-=0.6');

    tl.from('.scroll-indicator', {
      opacity: 0,
      y: 20
    }, '-=.4');


  }

  
  reveal(selector: string): void {

    gsap.from(selector, {

      opacity: 0,

      y: 60,

      duration: 1,

      ease: 'power3.out',

      scrollTrigger: {

        trigger: selector,

        start: 'top 85%',

        toggleActions: 'play none none none'

      }

    });

  }

 stagger(
  selector: string,
  trigger: string
): void {

  requestAnimationFrame(() => {

    const elements = gsap.utils.toArray(selector);

    if (!elements.length) {
      return;
    }

    gsap.from(elements, {

      opacity: 0,

      y: 60,

      duration: 1,

      stagger: 0.2,

      ease: 'power3.out',

      clearProps: 'all',

      scrollTrigger: {

        trigger,

        start: 'top 80%',

        toggleActions: 'play none none none'

      }

    });

  });

}
}