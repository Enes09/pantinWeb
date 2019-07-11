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
            $('.hr').addClass('grow')
        }, 1000);

        $(window).scroll(function() {
            let nav = $('nav');
            let scroll = $(window).scrollTop();

            if (scroll >= 100) nav.addClass('fixed'),$('.hr').removeClass('grow'), $("#sliderMainContainer").css({ 'margin-top': "80px" }), $("#contactUs").css({ 'margin-top': "80px" });
            else nav.removeClass('fixed'),$('.hr').addClass('grow'), $("#sliderMainContainer").css({ 'margin-top': 0 }), $("#contactUs").css({ 'margin-top': 0 });
        });

    });
    // ----------------------animation for the drop dawn menu ---------------------
    let menuBooleran = false;
    let isBigScreen = true; // if is big screen there is no animation for the menu list
    let windowWidth = $(window).width();
    if(windowWidth >1024 ){
      isBigScreen = true;
    }else{
      isBigScreen=false;
    }

    $('.menuLink').click(function() {
      if(!isBigScreen){
        $('#menuList').animate({height: '0px'});
        menuBooleran = false;
      }
    });
    $(document).click(function() {
      if(!isBigScreen){
        $('#menuList').animate({height: '0px'});
        menuBooleran = false;
      }
    });

    $('#menuButton').click(function(event) {
      if(!isBigScreen){
          if (!menuBooleran) {
            $('#menuList').animate({height: '350px'});
            menuBooleran = true;
        } else {
          $('#menuList').animate({height: '0px'});
          menuBooleran = false;
          }
          event.stopPropagation();
        }
    });
  }

}
