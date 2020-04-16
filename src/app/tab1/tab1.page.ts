import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Router } from "@angular/router";
import { FirebaseService } from "src/app/firebase/firebase.service";
import { ModalController } from '@ionic/angular';
import { CreateCompPage } from "src/app/create-comp/create-comp.page";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  points: number;
  type: any;
  userProfile: any = null;
  
  
    constructor(
    private platform: Platform,
    private firebase:FirebaseService,
    private modalController:ModalController,
    public router: Router) {
  
  }
  ngOnInit(){
    
   
    this.firebase.getDataOfUser().subscribe(e=>{
      this.points = e.point;
      console.log('ee',this.points);
    });
      
      
  }
   googleSignin() {
    this.firebase.googleSignin();
   }
  
  
  createCompinge() {

  // this.presentModal();
   this.router.navigate(['create-comp']);
   
    
  }
  // async presentModal() {
  //   const modal = await this.modalController.create({
  //     component: CreateCompPage,
     
  //   });
  //   await modal.present()
  //   modal.onDidDismiss().then(e => {
  //     this.type
  //   })
      
     
  //   return await modal.present();
    
  // }
  // loginUser(): void {//myreversedclientid
  //   this.googlePlus.login({
  //     'webClientId': '167757336992-0aqqo9rn80ledvcb2pmn3fqblb36oef6.apps.googleusercontent.com',
  //     'offline': true
  //   }).then( res => {
  //     firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
  //       .then( success => {
  //         console.log("Firebase success: " + JSON.stringify(success));
  //       })
  //       .catch( error => console.log("Firebase failure: " + JSON.stringify(error)));
  //    }).catch(err => console.error("Error: ", err));
  // }
  // login() {
  //   if (this.platform.is('cordova')) {
  //     this.nativeGoogleLogin();
  //   }
  //   else {
  //     this.webGoogleLogin();
  //   }

  // } 

  // async nativeGoogleLogin() {
  //   try {
  //     const user = await this.googlePlus.login({

  //       'webClientId': '941729484801-qjc4h0cv1b4d4c9s7ms7q8a48gie573e.apps.googleusercontent.com',
  //       'offline': true
  //     })
  //     return await this.angularFireAuth.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(user.idTocken))
  //   }
  //   catch (err) {
  //     console.log(err)  
  //   }

  // }

  // webGoogleLogin() {
  //   try {
  //     const provider = new firebase.auth.GoogleAuthProvider();
  //     const credential = new this.angularFireAuth.auth.signInWithPopup(provider)
  //   }
  //   catch (err) {
  //     console.log(err)
  //   }
  // }
}
