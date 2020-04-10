import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-comp',
  templateUrl: './create-comp.page.html',
  styleUrls: ['./create-comp.page.scss'],
})
export class CreateCompPage implements OnInit {
numberOfSubscribers = [10,20,30,40,50,60,70,100,200,300,400,500,600,700,800,900,1000]
  constructor() { }

  ngOnInit() {
  }

}
