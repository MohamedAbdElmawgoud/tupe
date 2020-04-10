import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-currency',
  templateUrl: './currency.page.html',
  styleUrls: ['./currency.page.scss'],
})
export class CurrencyPage implements OnInit {

  constructor(public router : Router) { }

  ngOnInit() {
  }
share(){
  this.router.navigate(['invite-friends']);
  
}
buy(){
  this.router.navigate(['buy-point']);
}
subscribe(){
  this.router.navigate(['subscription']);
}
}
 