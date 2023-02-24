
import { Component, OnInit } from '@angular/core';


import { CitiesService } from '../services/citiesInfo.service';
import { CityObject, Direction } from '../models/types.model';
import { hebrew } from '../shared/hebrew.data';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{

  north_he = hebrew.get("north");
  east_he = hebrew.get("east");
  sout_he = hebrew.get("south");
  west_he = hebrew.get("west");
  
  cityName_he = hebrew.get("cityName");
  residentsNum_he = hebrew.get("residentsNum");

  selectedDir: string = this.north_he;

  cityObject: CityObject = {
    name: "city",
    residentsNumber: 40,
    direction: Direction.East
  }

  cities: Observable<CityObject[]>;
  editedNumber!: string;

  directionsList = [
    {id: Direction.North, value: this.north_he}, 
    {id: Direction.East, value: this.east_he},
    {id: Direction.South, value: this.sout_he},
    {id: Direction.West, value: this.west_he}
];


  constructor(private citiesService: CitiesService, private data:DataService){
      this.cities = this.citiesService.fetchCitiesByDirection(this.selectedDir);
      console.log("filtered_cities = ");
      this.cities.forEach(
          x=>{console.log(x)}
      );
   }


  ngOnInit(): void{
  //  this.fetchCitiesToDisplay();
  }

  onDirectionSelect(select: string): void {
    this.selectedDir = select;
    console.log("selected direction is: " + this.selectedDir);
    this.citiesService.fetchCitiesByDirection(this.selectedDir)
  }

  saveNumberChange(cityName: string, newNumber: string){
    console.log("Residents number of city: "+ cityName + "has changed to: "+ newNumber);
    this.citiesService.editCityResidentNumber(cityName, Number(newNumber));
  }

}
