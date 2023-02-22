
import { Component, OnInit } from '@angular/core';


import { CitiesService } from '../services/cities.service';
import { CityObject, Direction } from '../models/types.model';
import { hebrew } from '../shared/hebrew.data';



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



  cities: Array<CityObject> = [];
  chosenDirection: Direction = Direction.North; //north is a Defualt value


  directionsList = [
    {id: Direction.North, value: this.north_he}, 
    {id: Direction.East, value: this.east_he},
    {id: Direction.South, value: this.sout_he},
    {id: Direction.West, value: this.west_he}
];


  constructor(private citiesService: CitiesService){

   }

  ngOnInit(): void{
   this.fetchUpdatedCities();
  }

  onDirectionSelect(selectEvent: Event): void {
    console.log(selectEvent)
    // this.chosenDirection = selectEvent.target.value;
    this.fetchUpdatedCities();
  }

  fetchUpdatedCities(){
    this.citiesService.fetchCitiesByDirection(this.chosenDirection).subscribe({
      next: (citiesList) =>
          this.cities = citiesList,
      error: (error) => console.log(error),
    })
  }

}
