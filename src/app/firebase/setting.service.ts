import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  public dbPath = '/settings';
  
   settingsRef: AngularFireList<settings> = null;


  constructor(private db: AngularFireDatabase) {
    this.settingsRef = db.list(this.dbPath);
   }


   getsettingsList(query ): AngularFireList<settings> {
    
    return this.db.list(this.dbPath , query);
    
  }
  getAllsettings() {
   return this.db.list(this.dbPath).snapshotChanges();
  }
}

export interface settings{
email:String,
point:number,
version:number,
message: String,
AppURl: String
}