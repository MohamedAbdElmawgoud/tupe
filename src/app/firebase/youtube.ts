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
            Authorization :     'Bearer ya29.a0Ae4lvC2mIw5VEDtgj3dgPThbnb8K3_DKn67-Yw5uDIHuISvDbsZcNSXaNg2QihVvhooxdZM2eHBX5ewTfjZZmMLveHKpZa754Y6qygOkMkkvoWnHtz2fA4rkKHejkfa2roenf8DHJEreVy5WQSyFRv6GnrxSjtBP4fA'
        }
    }).toPromise()
    
   }

   
 
}
