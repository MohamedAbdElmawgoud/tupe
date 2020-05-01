import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class OffersService {
  public dbPath = '/offers';
  
   offersRef: AngularFireList<offers> = null;


  constructor(private db: AngularFireDatabase) {
    this.offersRef = db.list(this.dbPath);
   }


   getoffersList(query ): AngularFireList<offers> {
    
    return this.db.list(this.dbPath , query);
    
  }
  getAlloffers() : AngularFireList<offers>{
   return this.db.list(this.dbPath);
  }
}

export interface offers{
point : number;
cash : number;
}