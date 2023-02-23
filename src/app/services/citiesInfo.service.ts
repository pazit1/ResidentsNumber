import { Injectable } from '@angular/core';
import { filter, Observable, map } from 'rxjs';



import { CityObject, Direction } from '../models/types.model';
import { hebrew } from '../shared/hebrew.data';
import {DataService} from './data.service'




@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  // citiesToDisplay: Observable<CityObject[]>;


  constructor(private dataService: DataService) {
    // this.citiesToDisplay = this.dataService.allCities$

    // dataService.allCities$.subscribe(x =>{
    //   x.forEach( x=>{
    //     if(x.direction.valueOf() === 'צפון'){
    //       console.log("pazit");
    //       console.log(x);
    //       this.arr1.push(x);
    //     }
    //   }
    //   )
    // });
    // console.log("aarr1:");
    // console.log(this.arr1);
    // this.filteredCities.next(this.arr1)
  }
  
  fetchCitiesByDirection(direction:string): Observable<CityObject[]>{  //return array with size 4 of cities in given direction
    console.log("dir to filter = " + direction);
    // return this.dataService.allCities$.pipe(map((city) => city)); 
    return this.dataService.allCities$.pipe(map((cities) => cities.filter((city) => city.direction.valueOf() === direction))); 
  }

  editCityResidentNumber(city:string, newNumber: number){
    this.editCityResidentNumber(city, newNumber);
  }

}
