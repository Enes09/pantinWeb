import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  lat = -23.8779431;
  lng = -49.8046873;
  zoom = 15;

  constructor() { }
  ngOnInit() {
    $(document).ready(() => {
      let test;
      let isBigScreen = true;
      let welcomeTextAndMapContainerWidth = $('#welcomeTextAndMapContainer').width();
      const windowWidth = $(window).width();
      if (windowWidth < 1024) {
        isBigScreen = false;
      }

      if (!isBigScreen) {
          $('#map').css({ width: welcomeTextAndMapContainerWidth });
        } else {
          $('#map').css({ width: welcomeTextAndMapContainerWidth / 2 });
        }
      });
   }
}
