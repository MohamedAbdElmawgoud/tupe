import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(public storage: Storage) { }

  async clear(){
    await this.storage.clear()
  }

  getUserId() {
   
    return this.storage.get('User')
  }


  saveUserId(versionId) {
    this.storage.set('User', versionId);
  }
  saveVersionId(versionId) {
    this.storage.set('version', versionId);
   // console.log(versionId);

}

getVersionId() {
 
  return this.storage.get('version')
  
  // .then((versionId) => {
   
  //   return versionId;
  // });
}
deleteVersion(){
  this.storage.remove('version');
}
}
