import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-link',
  template: '<youtube-player videoId="dQw4w9WgXcQ"></youtube-player>',  
  templateUrl: './add-link.page.html',
  styleUrls: ['./add-link.page.scss'],
})
export class AddLinkPage implements OnInit {

  constructor() { }

  ngOnInit() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

}
