import { Component, OnInit } from '@angular/core';

declare var $: any;


var startIsRunning = false;
    var leftIsRunning = false;

    // settings for slider
    var width = 720;
    var animationSpeed = 500;
    var pause = 4000;
    var currentSlide = 1;
    var returnWidth;
    var currentBar = 1;
    var interval;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  lat = -23.8779431;
  lng = -49.8046873;
  zoom = 15;


  imagePath1: any = '../assets/img/mecca1.jpg';
  imagePath2: any = '../assets/img/mecca2.jpg';
  imagePath3: any = '../assets/img/mecca3.jpg';
  imagePath4: any = '../assets/img/mecca4.jpg';

  constructor() { }
  ngOnInit() {
    $(document).ready(() => {
      let test;
      let isBigScreen = true;
      let welcomeTextAndMapContainerWidth = $('#welcomeTextAndMapContainer').width();
      const windowWidth = $(window).width();
      if (windowWidth <= 1024) {
        isBigScreen = false;
      }

      if (!isBigScreen) {
          $('#map').css({ width: welcomeTextAndMapContainerWidth });
        } else {
          $('#map').css({ width: welcomeTextAndMapContainerWidth / 2 });
          $("#welcometext").css({
            width: '40%',
            float: 'left',
            marginRight: '10px'
           });
        }

        var $slider = $('#slider');
      var $slideContainer = $('.slides', $slider);
      var $slides = $('.slide', $slider);


      if (!isBigScreen) {
          width = windowWidth;
          console.log("width: " + width);
          $('#slider').css({ width: $(window).width() });
          $('#slider .slide').css({ width: $(window).width()});
          $('#sliderMainContainer').css({ width: $(window).width() });
          $('.sliderHr').css({ width: '35px' });

        }else{
          width = 1000;
          $('#slider').css({ width: '1000px', height: '600px' });
          $('#slider .slide').css({ width: '1000px', height: '600px'});
          $('#sliderMainContainer').css({ width: '1000px', height: '600px' });
        }

      function navigationBarAppend() {
// tslint:disable-next-line: prefer-for-of
          for(let i=0; i < $slides.length; i++){
              $('#navigationBar').append('<hr class="sliderHr" style="'+ 
              "float: left; width:20%; margin-left: 5px;"
              +'">');
          }
      }

        navigationBarAppend();

      function currentBarNav() {

          $('.sliderHr:nth-child('+ currentBar +')').css({ 
              "background": "#9b9b9b",
              "border": "1px solid #9b9b9b",
              "position": "relative",
              "bottom": "5px"
          })

          for (let i = 0; i <= $slides.length; i++) {
              if (i != currentBar) {
                  $('.sliderHr:nth-child('+ i +')').css({ 
                  "background": "white",
                  "border": "1px solid white",
                  "position": "static",
                  "float": "left"
              });

            }
        }
      }

        currentBarNav();

      function startSlider() {
        startIsRunning = true; // for th 2 fast click issue

        if (currentSlide === $slides.length) {
            currentBar = 1;
            currentSlide = 1;
// tslint:disable-next-line: radix
            returnWidth = parseInt($slideContainer.css('margin-left'));
            $slideContainer.animate({'margin-left': '+='+ (-returnWidth) }, animationSpeed);
                } else {
                  // tslint:disable-next-line: only-arrow-functions
                    $slideContainer.animate({'margin-left': '-=' + width}, animationSpeed, function() {currentSlide++});
                    currentBar++;
                }

        currentBarNav();

        clearInterval(interval);
        interval = setInterval(startSlider, pause);
// tslint:disable-next-line: only-arrow-functions
        setTimeout(function() {startIsRunning = false; }, 500); // for th 2 fast click issue
    }

      function leftSldier() {
            leftIsRunning = true; // for th 2 fast click issue
            if( currentSlide === 1) {

              currentBar = $slides.length;
              currentSlide = currentSlide * $slides.length;
              $slideContainer.animate({'margin-left': '-=' + width * ($slides.length - 1 ) }, animationSpeed);

          } else {
            // tslint:disable-next-line: only-arrow-functions
              $slideContainer.animate({'margin-left': '+=' + width}, animationSpeed, function() { currentSlide--; } );
              currentBar--;
          }

            currentBarNav();

            clearInterval(interval);
            interval = setInterval(startSlider, pause);

// tslint:disable-next-line: only-arrow-functions
            setTimeout(function() { leftIsRunning = false; }, 500); // for th 2 fast click issue
  }

        interval = setInterval(startSlider, pause);

      function allowFunctionStart() {
        if (!startIsRunning) {
            startSlider();
        }
    }

      function allowFucntionLeft() {
        if (!leftIsRunning) {
            leftSldier();
        }
    }

      $('#next').click(allowFunctionStart);
      $('#prev').click(allowFucntionLeft);


      });
   }
}
