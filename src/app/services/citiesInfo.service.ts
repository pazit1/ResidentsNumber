import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, Observable, map } from 'rxjs';



import { CityObject, Direction } from '../models/types.model';
import {DataService} from './data.service'




@Injectable({
  providedIn: 'root'
})
export class CitiesService {

  citiesToDisplay: Observable<CityObject[]>;


  constructor(private dataService: DataService) {
    this.citiesToDisplay = this.dataService.allCities$
  }
  
  fetchCitiesByDirection(direction:string): Observable<CityObject[]>{  //return array with size 4 of cities in given direction
    return this.citiesToDisplay.pipe(map((city) => city.filter((city) => city.direction === direction))); 
  }

  editCityResidentNumber(city:string, newNumber: number){
    this.editCityResidentNumber(city, newNumber);
  }



  // constructor(private http: Http) {
  //  var object;
  //  this.getJSON().subscribe(data => object=data, error => console.log(error));
  // }
  
  // public getJSON(): Observable<any> {
  //   return this.http.get(_jsonURL)
  //    .map((response:any) => response.json())
  //    .catch((error:any) => console.log(error));
  
  // }



}
