import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "src/app/firebase/firebase.service";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})

export class LogInPage implements OnInit {

  constructor(private firebase:FirebaseService,) { }

  ngOnInit() {
  }
 async googleSignin() {
    await this.firebase.googleSignin();
   }
  
}
