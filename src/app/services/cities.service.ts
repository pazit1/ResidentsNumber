import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CityObject, Direction } from '../models/types.model';




@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  constructor() { }

  
  fetchCitiesByDirection(direction: Direction): Observable<CityObject[]>{  //return array with size 4 of cities in given direction
      return new Observable(); 
  }


}
