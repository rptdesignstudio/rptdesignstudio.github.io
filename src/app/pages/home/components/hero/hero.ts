import { Component, AfterViewInit, ElementRef, inject } from '@angular/core';
import gsap from 'gsap';
import { Button } from '../../../../shared/ui/button/button';
import { Container } from '../../../../shared/ui/container/container';
import { AnimationService } from '../../../../core/services/animation';
import { RouterLink } from '@angular/router';


@Component({

selector:'app-hero',

standalone:true,

imports:[Button, Container, RouterLink],

templateUrl:'./hero.html',

styleUrl:'./hero.scss'

})


export class Hero implements AfterViewInit{

private animationService = inject(AnimationService);

constructor(
private element:ElementRef
){}



ngAfterViewInit(){

 this.animationService.animateHero();

}


}