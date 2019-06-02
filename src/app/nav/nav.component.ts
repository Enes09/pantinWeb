import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $(document).ready(() => {

        $('#titleDiv').animate({
            opacity: 1
        },2000,function() {});

        setTimeout(function() {
            $('hr').addClass('grow')
        }, 1000);

        $(window).scroll(function() {
            var nav = $('nav');
            var scroll = $(window).scrollTop();

            if (scroll >= 100) nav.addClass('fixed'), nav.css("margin-top", 0), $('hr').removeClass('grow');
            else nav.removeClass('fixed'), nav.css("margin-top", 30), $('hr').addClass('grow');
        });

    });
  }

}
