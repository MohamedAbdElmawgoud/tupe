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
     return this.db.object(this.dbPath + '/' + key).update( value);
   }
  
   deletecamping(key: string): Promise<void> {
     return this.campingsRef.remove(key);
   }
  
   getcampingsList(query ): AngularFireList<camping> {
     
     return this.db.list(this.dbPath , query);
   }
  
   deleteAll(): Promise<void> {
     return this.campingsRef.remove();
   }

}
export interface camping {
Subscribe?: number ;
likes?: number;
view: number ;
type: string;
needed?: number;
ListOfUserDoneIt: string[];
second: number;
point: number,
createdData: any,
videoUrl: string,
ownerId : any ,
done ? : any

}