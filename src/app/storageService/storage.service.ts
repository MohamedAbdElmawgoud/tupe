import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(public storage: Storage) { }

  saveUserId(userId) {
      this.storage.set('User', userId);
     // console.log(userId);

  }

  getUserId() {
   
    return this.storage.get('User')
  }
  deleteUser(){
    this.storage.remove('User');
  }
}
