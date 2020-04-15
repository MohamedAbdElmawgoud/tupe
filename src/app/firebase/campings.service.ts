import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CampingsService {

 

  private dbPath = '/campings';
  
   campingsRef: AngularFireList<camping> = null;
  
   constructor(private db: AngularFireDatabase) {
     this.campingsRef = db.list(this.dbPath);
   }
  
   createcamping(camping: camping): void {
     this.campingsRef.push(camping);
   }
  
   updatecamping(key: string, value: any): Promise<void> {
     return this.campingsRef.update(key, value);
   }
  
   deletecamping(key: string): Promise<void> {
     return this.campingsRef.remove(key);
   }
  
   getcampingsList(): AngularFireList<camping> {
     
     return this.campingsRef;
   }
  
   deleteAll(): Promise<void> {
     return this.campingsRef.remove();
   }

}
export interface camping {
Subscribe: number ;
likes: number;
view: number ;

}