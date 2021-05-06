import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {


  companies: any


  constructor() { 
    this.companies = [
      {
        "name":"Amazon",
        "logo": "../../../assets/AMZN.svg",
        "price": "3116 USD"
      },
      {
        "name":"Facebook",
        "logo": "../../../assets/FB.png",
        "price": "226 USD"
      },
      {
        "name":"Google",
        "logo": "../../../assets/GOOGL.png",
        "price": "1515 USD"
      }
    ]
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.companies, event.previousIndex, event.currentIndex);
  }

}
