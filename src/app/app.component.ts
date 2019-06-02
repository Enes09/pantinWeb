import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'pantinWeb';

    ngOnInit(): void {
    $(document).ready(() => {

        $('#titleDiv').animate({
            opacity: 1
        },2000,function() {});

        setTimeout(function() {
            $('hr').addClass('grow')
        }, 1000);
        
    });
  }
}
