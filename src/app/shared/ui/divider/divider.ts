import { Component, input } from '@angular/core';

import { DividerVariant }
from '../../../core/models/divider.model';


@Component({

  selector:'app-divider',

  standalone:true,

  templateUrl:'./divider.html',

  styleUrl:'./divider.scss'

})
export class Divider {


  variant = input<DividerVariant>('default');


}