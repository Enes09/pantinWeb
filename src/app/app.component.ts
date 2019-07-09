import { Component } from '@angular/core';
declare var $: any;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'pantinWeb';

  ngOnInit() {
  $(document).ready(() => {
    let isBigScreen = true;
    const windowWidth = $(window).width();
    if (windowWidth <= 1024) {
            isBigScreen = false;
          }
        


    if (!isBigScreen) {
      $('#map').css({ });
    } else {
      //$('#bodyFooter').css({ position: 'absolute', bottom: 0, left: 0, right: 0 });
      
    }
    });
  }
}
