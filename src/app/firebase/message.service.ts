import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public dbPath = '/message';

  messageRef: AngularFireList<message> = null;
 
  constructor(private db: AngularFireDatabase) {
    this.messageRef = db.list(this.dbPath);
  }
 
  
 
  deletemessage(data): Promise<void> {
   return  this.db.database.ref(`/message/${data}`).remove()
 
  } 
 
  getmessageList(query ): AngularFireList<message> {
    
    return this.db.list(this.dbPath , query);
    
  }
  getAllmessage() : AngularFireList<message>{
   return this.db.list(this.dbPath);
  }
  
 
  deleteAll(): Promise<void> {
    return this.messageRef.remove();
  }
 
 }
 export interface message {
 
 header:string,
 body:string
 }