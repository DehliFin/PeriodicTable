import { Component, OnInit, Input } from '@angular/core';
import {PElement} from "../pelement";
import { ActivatedRoute } from '@angular/router';
import { ElementsService } from '../elements.service';

@Component({
  selector: 'app-element-detail',
  templateUrl: './element-detail.component.html',
  styleUrls: ['./element-detail.component.css']
})
export class ElementDetailComponent implements OnInit {

  public element: PElement = new PElement( 0,0,"Hydrogen", 1, 1.008,  "Reactive nonmetal", "H" );

  constructor(private _route: ActivatedRoute,
    private _elementsService: ElementsService,
    ) { }

 

  ngOnInit(): void {

    this._route.params.subscribe(params => {
 
      let identifier = +params['atomicNumber'];
 
      let foundElement = this._elementsService.elements.find(item =>
        item.atomicNumber === identifier);
 
     this.element = foundElement ? foundElement : new PElement( 0,0,"Hydrogen", 1, 1.008,  "Reactive nonmetal", "H" );
     console.log(foundElement);
    });

  }

}
