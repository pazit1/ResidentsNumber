import { Component, Input } from '@angular/core';
import { CityObject } from '../models/types.model';

@Component({
  selector: 'app-city-info',
  templateUrl: './city-info.component.html',
  styleUrls: ['./city-info.component.scss']
})
export class CityInfoComponent {
@Input() cityObject!: CityObject;


  // cityInfo

}
