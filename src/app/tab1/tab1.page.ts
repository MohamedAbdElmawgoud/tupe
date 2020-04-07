import { Component } from '@angular/core';
import { GooglePlus } from '@ionic-native/google-plus/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public googlePlus: GooglePlus) {}
  login() {
    this.googlePlus.login({})
    .then(res => console.log(res))
    .catch(err => console.error(err));
    } 
}
