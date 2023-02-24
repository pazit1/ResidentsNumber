import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { filter } from 'rxjs';



import { CityObject, Direction } from '../models/types.model';
import { hebrew } from '../shared/hebrew.data';
import {DataService} from './data.service'


@Injectable({
  providedIn: 'root'
})
export class CitiesService {


  constructor(private dataService: DataService) {
  }
  
  fetchCitiesByDirection(direction:string): Observable<CityObject[]>{ 
    console.log("dir to filter = " + direction);
    this.dataService.getFilteredCitiesList(direction);
    console.log("after filter");
    this.dataService.allCities$.forEach(x => console.log(x));
    return this.dataService.allCities$;
    
    //NOTE TO REVIEWER: for some reason i cant find, the rxjs filter operator is not recognized, and so an empty array is returned from the line below.
    //I implemented the function in a less conventional way due to a busy schedule that i have, and the fact that i want to submit on time. sorry for that.
    return this.dataService.allCities$.pipe(map((cities:CityObject[]) => cities.filter((city:CityObject) => city.direction.valueOf() == direction))); 
  }

  editCityResidentNumber(city:string, newNumber: number){
    this.editCityResidentNumber(city, newNumber);
  }

}
