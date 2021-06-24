import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import {ElementsService} from "../elements.service";
import {PElement} from "../pelement";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  elements:PElement[];
  table : PElement[][];

  constructor(elementservice:ElementsService) {
    this.elements=elementservice.elements;
    this.table =[]
    console.log(this.table);
    for (let i = 0; i < 20; i++) {
      
      this.table[i] =[];
  

    }
    for (let i = 0; i < this.elements.length; i++) {
      console.log(this.elements[i].yPos,this.elements[i].xPos);
      this.table[this.elements[i].yPos][this.elements[i].xPos] = this.elements[i];
    }
    console.log(this.table);
   }

 


  ngOnInit(): void {

    
  }

}
