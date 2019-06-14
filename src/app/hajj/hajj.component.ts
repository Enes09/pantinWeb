import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-hajj',
  templateUrl: './hajj.component.html',
  styleUrls: ['./hajj.component.scss']
})
export class HajjComponent implements OnInit {

  static componentTitle: 'Hajj';

  constructor() { }

  ngOnInit() {
    $(document).ready(() => {
        $(window).scroll(function() {
          let scroll = $(window).scrollTop();

          if (scroll >= 100) $('#sliderContainer').addClass('test');
          else $('#sliderContainer').removeClass('test');
      });

    });
  }

  

}
