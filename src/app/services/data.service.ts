import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { CityObject, Direction } from '../models/types.model';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  private demoData = 'assets/demo_DB.json';
  arr: Array<CityObject> = [];
  allCities = new BehaviorSubject<CityObject[]>([]);
  allCities$ = this.allCities.asObservable();


  constructor(private http: HttpClient) {
 }

 
 getAllCitiesInfo(): Observable<any>{
  return this.http.get(this.demoData);
}

 getFilteredCitiesList(direction: string){
  this.arr = []; //clear previous filters
  this.getAllCitiesInfo().subscribe(
    (data) => {
      for(let i=0; i< data.length; i++){
        if(data[i].direction == direction){
        this.arr.push({name: data[i].name, residentsNumber: data[i].number, direction: data[i].direction})
        }
      }
    });
    this.allCities.next(this.arr);
 }

  editCityResidentsNumber(name: string, number: number){
    console.log("edit json for city: " + name + "with residents new number: " + number);
    //Note_TO_REVIEWER: cant wtire to json file without a server side, but suppose i could, after this line of json editing, i would call getFilteredCitiesList(direction) to display the new data
  }


}
