import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../firebase/firebase.service';
import { YoutubeService } from '../firebase/youtube';

@Component({
  selector: 'app-create-subscripe',
  templateUrl: './create-subscripe.page.html',
  styleUrls: ['./create-subscripe.page.scss'],
})
export class CreateSubscripePage implements OnInit {

  constructor(private userService : FirebaseService , private youtube : YoutubeService) {

   }

  async ngOnInit() {
   let d = await  this.youtube.getUser('')
   
  }

}
