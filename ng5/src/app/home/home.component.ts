import { Component, OnInit } from '@angular/core';
import {trigger,style,transition,animate,keyframes,query,stagger} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [

    trigger('goals', [
      transition('* => *', [
        query(':enter',style({opacity: 0}), {optional: true}),

        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: .5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1}),
          ]))]), {optional: true}),

        query(':leave', stagger('100ms', [
          animate('.3s ease-in', keyframes([
            style({opacity: 1, transform: 'translateY(0)', offset: 0}),
            style({opacity: .5, transform: 'translateY(15px)', offset: .3}),
            style({opacity: 0, transform: 'translateY(-20%)', offset: 1}),
          ]))]), {optional:true})

      ])
    ])
  ]
})

export class HomeComponent implements OnInit {

  itemCount: number = 4;
  btnText: string = "Add an item";
  goalText: string = 'My first life goal';
  password: string = '';
  goals = ['Skydiving', 'Swimming with Sharks', 'Dancing Naked on Ice'];

  constructor() { }

  ngOnInit() {
    this.itemCount = this.goals.length;
  }

  addItem(){
    this.goals.push(this.goalText);
    this.goalText= '';
    this.itemCount = this.goals.length;
  }

  removeItem(i){
    this.goals.splice(i, 1);
  }

}
