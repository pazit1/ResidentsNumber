import { Component, Input } from '@angular/core';
import { CityObject } from '../models/types.model';

import { hebrew } from '../shared/hebrew.data';

@Component({
  selector: 'app-city-info',
  templateUrl: './city-info.component.html',
  styleUrls: ['./city-info.component.scss']
})
export class CityInfoComponent {
@Input() cityObject!: CityObject;

edit_he = hebrew.get("edit");
save_he = hebrew.get("save");

}
