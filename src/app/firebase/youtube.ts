import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})
export class YoutubeService {




    constructor(private http: HttpClient , private storage : Storage) {
    }

    async getVideoData(id) {
        return await this.http.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=AIzaSyCfb6JjRl78H45si1Jmetf2bDIwOcNg9oY`).toPromise()

    }
    async getChannelData(id) {
        return await this.http.get(`https://www.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${id}&key=AIzaSyCfb6JjRl78H45si1Jmetf2bDIwOcNg9oY`).toPromise()

    }
    async getUserChannels() {
        let access = await this.storage.get('accessToken')
        return await this.http.get(`https://www.googleapis.com/youtube/v3/subscriptions?mine=true&part=snippet&key=AIzaSyCfb6JjRl78H45si1Jmetf2bDIwOcNg9oY`, {
            headers: {
                Authorization: 'Bearer ya29.a0Ae4lvC3aximGqNNH153WFwK-Lpc8_IOwOtDOgfIEwq33S2lhQwS3w0gh5SUysLvmSeTUTdnhyvWjURmhpATEjQM1UsjS8-2WI5UX65RDn22TNj_DN7UD_D18CI9rrqOvMlUvWqvsf50AViTQDcFTEdQDWf4J7vPytNJ0'
            }
        }).toPromise()

    }



}
