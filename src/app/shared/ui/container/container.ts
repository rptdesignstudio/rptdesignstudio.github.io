import { Component, input } from '@angular/core';

import { ContainerSize }
from '../../../core/models/container.model';


@Component({

  selector:'app-container',

  standalone:true,

  templateUrl:'./container.html',

  styleUrl:'./container.scss'

})
export class Container {
  
    size = input<ContainerSize>('large');

}