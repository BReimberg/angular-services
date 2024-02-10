import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  //propriedades:
  name: string = "Bulbasaur"
  attributesTypes: string[] = ['Fire', 'Rock']

  constructor() { }

  ngOnInit(): void {
  }

}
