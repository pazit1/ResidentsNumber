import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { CityObject } from '../models/types.model';
import * as $ from "jquery";


import { hebrew } from '../shared/hebrew.data';

@Component({
  selector: 'app-city-info',
  templateUrl: './city-info.component.html',
  styleUrls: ['./city-info.component.scss']
})
export class CityInfoComponent implements OnInit {
// @Input() cityObject!: CityObject;
@Input() name!: string;
@Input() residentsNumber!: string;
@Output() numberChange = new EventEmitter<string>();


edit_he = hebrew.get("edit");
save_he = hebrew.get("save");
enableNumberEdit = true;

constructor(){}


ngOnInit(){
  $("input").attr('disabled', 'disabled')
}


OnEditResidentsNumberClick(){
  console.log("edit number")
  this.enableNumberEdit = true;
  $("input").removeAttr('disabled');
}

onSaveNumberChangeClick(){
  this.enableNumberEdit = false;
  $("input").attr('disabled', 'disabled')
  this.numberChange.emit(this.residentsNumber);
}


}
