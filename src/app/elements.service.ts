import { Injectable } from '@angular/core';
import {PElement}from "./pelement";

@Injectable({
  providedIn: 'root'
})
export class ElementsService {

  constructor() { }

  elements:PElement[]=[
    { xPos:0,yPos:0,name:"Hydrogen", atomicNumber:1, mass:1.008, category: "Reactivenonmetal", symbol:"H" },
    { xPos:17,yPos:0,name:"Helium", atomicNumber:2, mass:1.008, category: "Noblegas", symbol:"He" },
    { xPos:0,yPos:1,name:"Lithium", atomicNumber:3, mass:1.008, category: "Alkalimetal ", symbol:"Li" },
    { xPos:1,yPos:1,name:"Beryllium", atomicNumber:4, mass:1.008, category: "Alkalineearthmetal", symbol:"Be" },
    { xPos:0,yPos:0,name:"Hydrogen", atomicNumber:1, mass:1.008, category: "Reactive nonmetal", symbol:"H" },
    { xPos:0,yPos:0,name:"Hydrogen", atomicNumber:1, mass:1.008, category: "Reactive nonmetal", symbol:"H" },
    { xPos:0,yPos:0,name:"Hydrogen", atomicNumber:1, mass:1.008, category: "Reactive nonmetal", symbol:"H" },
    { xPos:0,yPos:0,name:"Hydrogen", atomicNumber:1, mass:1.008, category: "Reactive nonmetal", symbol:"H" },
    { xPos:0,yPos:0,name:"Hydrogen", atomicNumber:1, mass:1.008, category: "Reactive nonmetal", symbol:"H" },
    { xPos:0,yPos:0,name:"Hydrogen", atomicNumber:1, mass:1.008, category: "Reactive nonmetal", symbol:"H" },
    { xPos:0,yPos:0,name:"Hydrogen", atomicNumber:1, mass:1.008, category: "Reactive nonmetal", symbol:"H" },
    { xPos:0,yPos:0,name:"Hydrogen", atomicNumber:1, mass:1.008, category: "Reactive nonmetal", symbol:"H" },
    { xPos:0,yPos:0,name:"Hydrogen", atomicNumber:1, mass:1.008, category: "Reactive nonmetal", symbol:"H" },
    { xPos:0,yPos:0,name:"Hydrogen", atomicNumber:1, mass:1.008, category: "Reactive nonmetal", symbol:"H" },
    { xPos:0,yPos:0,name:"Hydrogen", atomicNumber:1, mass:1.008, category: "Reactive nonmetal", symbol:"H" },
    { xPos:0,yPos:0,name:"Hydrogen", atomicNumber:1, mass:1.008, category: "Reactive nonmetal", symbol:"H" },
    { xPos:0,yPos:0,name:"Hydrogen", atomicNumber:1, mass:1.008, category: "Reactive nonmetal", symbol:"H" },
    { xPos:0,yPos:0,name:"Hydrogen", atomicNumber:1, mass:1.008, category: "Reactive nonmetal", symbol:"H" },
    { xPos:0,yPos:0,name:"Hydrogen", atomicNumber:1, mass:1.008, category: "Reactive nonmetal", symbol:"H" },
    { xPos:0,yPos:0,name:"Hydrogen", atomicNumber:1, mass:1.008, category: "Reactive nonmetal", symbol:"H" },
    { xPos:0,yPos:0,name:"Hydrogen", atomicNumber:1, mass:1.008, category: "Reactive nonmetal", symbol:"H" },
    { xPos:0,yPos:0,name:"Hydrogen", atomicNumber:1, mass:1.008, category: "Reactive nonmetal", symbol:"H" },
    { xPos:0,yPos:0,name:"Hydrogen", atomicNumber:1, mass:1.008, category: "Reactive nonmetal", symbol:"H" },
    { xPos:0,yPos:0,name:"Hydrogen", atomicNumber:1, mass:1.008, category: "Reactive nonmetal", symbol:"H" },
    { xPos:0,yPos:0,name:"Hydrogen", atomicNumber:1, mass:1.008, category: "Reactive nonmetal", symbol:"H" },
    { xPos:0,yPos:0,name:"Hydrogen", atomicNumber:1, mass:1.008, category: "Reactive nonmetal", symbol:"H" },
    { xPos:0,yPos:0,name:"Hydrogen", atomicNumber:1, mass:1.008, category: "Reactive nonmetal", symbol:"H" },
    { xPos:0,yPos:0,name:"Hydrogen", atomicNumber:1, mass:1.008, category: "Reactive nonmetal", symbol:"H" },
    { xPos:0,yPos:0,name:"Hydrogen", atomicNumber:1, mass:1.008, category: "Reactive nonmetal", symbol:"H" },
    { xPos:0,yPos:0,name:"Hydrogen", atomicNumber:1, mass:1.008, category: "Reactive nonmetal", symbol:"H" },
    { xPos:0,yPos:0,name:"Hydrogen", atomicNumber:1, mass:1.008, category: "Reactive nonmetal", symbol:"H" },
    { xPos:0,yPos:0,name:"Hydrogen", atomicNumber:1, mass:1.008, category: "Reactive nonmetal", symbol:"H" },
    { xPos:0,yPos:0,name:"Hydrogen", atomicNumber:1, mass:1.008, category: "Reactive nonmetal", symbol:"H" },
    { xPos:0,yPos:0,name:"Hydrogen", atomicNumber:1, mass:1.008, category: "Reactive nonmetal", symbol:"H" },
    { xPos:0,yPos:0,name:"Hydrogen", atomicNumber:1, mass:1.008, category: "Reactive nonmetal", symbol:"H" },
    { xPos:0,yPos:0,name:"Hydrogen", atomicNumber:1, mass:1.008, category: "Reactive nonmetal", symbol:"H" },
    { xPos:0,yPos:0,name:"Hydrogen", atomicNumber:1, mass:1.008, category: "Reactive nonmetal", symbol:"H" },
    { xPos:0,yPos:0,name:"Hydrogen", atomicNumber:1, mass:1.008, category: "Reactive nonmetal", symbol:"H" },
    { xPos:0,yPos:0,name:"Hydrogen", atomicNumber:1, mass:1.008, category: "Reactive nonmetal", symbol:"H" },
    { xPos:0,yPos:0,name:"Hydrogen", atomicNumber:1, mass:1.008, category: "Reactive nonmetal", symbol:"H" },
    { xPos:0,yPos:0,name:"Hydrogen", atomicNumber:1, mass:1.008, category: "Reactive nonmetal", symbol:"H" },
    { xPos:0,yPos:0,name:"Hydrogen", atomicNumber:1, mass:1.008, category: "Reactive nonmetal", symbol:"H" },
    { xPos:0,yPos:0,name:"Hydrogen", atomicNumber:1, mass:1.008, category: "Reactive nonmetal", symbol:"H" },
    { xPos:0,yPos:0,name:"Hydrogen", atomicNumber:1, mass:1.008, category: "Reactive nonmetal", symbol:"H" },
    { xPos:0,yPos:0,name:"Hydrogen", atomicNumber:1, mass:1.008, category: "Reactive nonmetal", symbol:"H" },
    { xPos:0,yPos:0,name:"Hydrogen", atomicNumber:1, mass:1.008, category: "Reactive nonmetal", symbol:"H" },
    { xPos:0,yPos:0,name:"Hydrogen", atomicNumber:1, mass:1.008, category: "Reactive nonmetal", symbol:"H" },
    
  ]

}
