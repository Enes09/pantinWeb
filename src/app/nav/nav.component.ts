import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  componentTitle: any;
  currentUrl: string;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => { 
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
        switch (this.currentUrl) {
          case '/':
            this.currentUrl = 'Accueil';
            break;
          case '/hajj':
            this.currentUrl = 'Hajj';
            break;
          case '/umrah':
            this.currentUrl = 'Omra';
            break;
          case '/funeral':
            this.currentUrl = 'Fonds d\'obsèques';
            break;
          case '/contact':
            this.currentUrl = 'Contact';
            break;
          default:
            this.currentUrl = 'Introuvables';
            break;
        }
      }
    });
  }

  ngOnInit(): void {
    $(document).ready(() => {
// --------------animation for the title-------------------------------
        $('#titleDiv').animate({
            opacity: 1
        }, 2000,function() {});

        setTimeout(function() {
            $('hr').addClass('grow')
        }, 1000);

        $(window).scroll(function() {
            let nav = $('nav');
            let scroll = $(window).scrollTop();

            if (scroll >= 100) nav.addClass('fixed'), nav.css("margin-top", 0), $('hr').removeClass('grow');
            else nav.removeClass('fixed'), nav.css("margin-top", 30), $('hr').addClass('grow');
        });

    });
    // ----------------------animation for the drop dawn menu ---------------------
    let menuBooleran = false;

    $('.menuLink').click(function() {
      $('ul').animate({height: '0px'});
      menuBooleran = false;
    });
    $(document).click(function() {
      $('ul').animate({height: '0px'});
      menuBooleran = false;
    });

    $('#menuButton').click(function(event) {
      if (!menuBooleran) {
        $('ul').animate({height: '350px'});
        menuBooleran = true;
    } else {
      $('ul').animate({height: '0px'});
      menuBooleran = false;
      }
      event.stopPropagation();
    });
  }

}
