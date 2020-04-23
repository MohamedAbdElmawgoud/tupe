import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

 

  
   constructor(private http : HttpClient ) {
   }
  
   async getVideoData(id) {
    let d = await  this.http.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=AIzaSyCfb6JjRl78H45si1Jmetf2bDIwOcNg9oY`).toPromise()
    
   }
   async getChannelData(id) {
    let d = await  this.http.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=AIzaSyCfb6JjRl78H45si1Jmetf2bDIwOcNg9oY`).toPromise()
    
   }
   async getUser(id) {
       let headers = new HttpHeaders()
    let d = await  this.http.get(`https://www.googleapis.com/youtube/v3/subscriptions?mine=true&part=snippet&key=AIzaSyCfb6JjRl78H45si1Jmetf2bDIwOcNg9oY` , {
        headers : {
            Authorization :     'Bearer ya29.a0Ae4lvC10n6Hrqbtj3kO_6iNFuyCO-ICinMGcIMFIHlcMkZK1YBsXiVTB2bOdjyXTN8XlRl8mfXSXu6yDHsblkCTMW4iIT6GXYG-uBWABRie-as-ixvAFpVI_QXlrYo05_qmoSjxF89nnitez2Z8A0i-mA5s9EzDLw4o'
        }
    }).toPromise()
    
   }

   
 
}
