import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name = "hello tp 1 home "

  prop = false;

  
  show(){
    console.log("event binding");
  }

  nametest="bonjour";

  constructor() { }

  ngOnInit(): void {
  }

}
