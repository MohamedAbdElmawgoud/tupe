import { Component, OnInit } from '@angular/core';
import { FirebaseService } from "src/app/firebase/firebase.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})

export class LogInPage implements OnInit {
  userProfile : any
  constructor(private firebase:FirebaseService,public router : Router,) { }

  ngOnInit() {
  }
 async googleSignin() {
    await this.firebase.googleSignin();
    this.router.navigate(['']);
   }
  
}
