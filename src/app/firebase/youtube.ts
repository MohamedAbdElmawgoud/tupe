import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { FirebaseService } from './firebase.service';

@Injectable({
    providedIn: 'root'
})
export class YoutubeService {




    constructor(private http: HttpClient, private storage: Storage, private router: Router,
        private firebase: FirebaseService
    ) {
        if(window['plugins']){
            window['plugins'].googleplus.trySilentLogin(
                {
    
                },
                async (obj) => {
                    this.firebase.updateUserData(obj)
    
                },
                function (msg) {
                    // alert('error: ' + msg);
                }
            );
        }

    }

    async getVideoData(id) {
        return await this.http.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=AIzaSyDCkKxVlrW7YFvjCHVkwfBUcH5r915E-Rs`).toPromise()

    }
    async getChannelData(id) {
        return await this.http.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=AIzaSyDCkKxVlrW7YFvjCHVkwfBUcH5r915E-Rs`).toPromise()

    }
    async getUserChannels() {
        window['plugins'].googleplus.trySilentLogin(
            {

            },
            async (obj) => {
                this.firebase.updateUserData(obj)

            },
            function (msg) {
                alert('error: ' + msg);
            }
        );
        try {
            let access = await this.storage.get('accessToken')
            return await this.http.get(`https://www.googleapis.com/youtube/v3/subscriptions?mine=true&part=snippet&maxResults=50&key=AIzaSyDCkKxVlrW7YFvjCHVkwfBUcH5r915E-Rs`, {
                headers: {
                    Authorization: 'Bearer ' + access
                }
            }).toPromise()
        } catch (e) {
            // alert('youtube token is expired ')
            // this.storage.clear();
            // this.router.navigate(['log-in'])



        }


    }



}
