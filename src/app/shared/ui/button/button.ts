import { Component, input } from '@angular/core';

import {
  ButtonVariant,
  ButtonSize
} from '../../../core/models/button.model';


@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.html',
  styleUrl: './button.scss'
})
export class Button {


  variant = input<ButtonVariant>('gold');


  size = input<ButtonSize>('medium');


}