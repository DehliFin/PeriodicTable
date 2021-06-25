import { Component, OnInit, Input } from '@angular/core';
import {PElement} from "../pelement";

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {

  @Input() element: PElement = new PElement( 0,0,"Hydrogen", 1, 1.008,  "Reactive nonmetal", "H" );

  constructor() {
    /*if (this.element === null)
    this.element = new PElement( 0,0,"Hydrogen", 1, 1.008,  "Reactive nonmetal", "H" );
*/
  }
  
  ngOnInit(): void {

  }

}
