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
    this.getAllCitiesInfo().subscribe(
      (data) => {
        for(let i=0; i< data.length; i++){
          this.arr.push({name: data[i].name, residentsNumber: data[i].number, direction: data[i].direction})
        }
      });
      console.log("arr=");
      console.log( this.arr);
      this.allCities.next(this.arr)
    

  //  this.getAllCitiesInfo().pipe(
  //   map((data) => data.forEach((city: any) => {
  //     let newCity:CityObject = {
  //       name: city.name,
  //       residentsNumber: city.residentsNumber,
  //       direction: city.direction
  //     };
  //     console.log("city: " + city);
  //     this.arr.push(newCity);
  //     this.allCities.next(this.arr);
  //   }))
  // );
  // console.log(this.arr);
 }


  getAllCitiesInfo(): Observable<any>{
      return this.http.get(this.demoData);
  }

  editCityResidentsNumber(name: string, number: number){
    console.log("edit json for city: " + name + "with residents new number: " + number);
      //change the json 
  }


}
