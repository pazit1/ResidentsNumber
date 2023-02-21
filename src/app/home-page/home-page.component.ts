
import { Component, OnInit } from '@angular/core';
import { CitiesService } from '../services/cities.service';
import { CityObject, Direction } from '../models/types.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit{

  cities: Array<CityObject> = [];
  chosenDirection: Direction = Direction.North; //north is a Defualt value
  // directionsList = [Direction.North, Direction.East, Direction.South, Direction.West];
  // directionsList = ["North", "East", "South", "West"];

  directionsList = [
    {id: Direction.North, value: "North"}, 
    {id: Direction.East, value: "East",},
    {id: Direction.South, value: "South"},
    {id: Direction.West, value: "West"}
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
