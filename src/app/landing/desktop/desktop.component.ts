import {Component, HostListener, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {faFacebook, faGoogle, faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import {faInstagram} from '@fortawesome/free-brands-svg-icons/faInstagram';
import {faTwitter} from '@fortawesome/free-brands-svg-icons/faTwitter';
import {faPhone} from '@fortawesome/free-solid-svg-icons/faPhone';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons/faEnvelope';
import {animate, style, transition, trigger} from '@angular/animations';
import {
  faBars,
  faBriefcase,
  faBuilding,
  faChartLine,
  faChevronDown,
  faMapMarker,
  faMapPin,
  faSearch,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import {SwiperComponent, SwiperConfigInterface} from 'ngx-swiper-wrapper';
import {Router} from '@angular/router';

@Component({
  selector: 'app-desktop',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './desktop.component.html',
  styleUrls: ['./desktop.component.scss']
})
export class DesktopComponent implements OnInit {
  facebook = faFacebook;
  company = faBuilding;
  twit = faTwitter;
  insta = faInstagram;
  phone = faPhone;
  menus = faBars;
  mail = faEnvelope;
  search = faSearch;
  watsapp = faWhatsapp;
  person = faUser;
  graphs = faChartLine;
  location = faMapPin;
  selected = 0;
  arrowdown = faChevronDown;
  show = 'all';
  scroll = false;
  value = false;
  office = faBriefcase;
  config: SwiperConfigInterface = {
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: false,
    scrollbar: false,
    navigation: true,
    pagination: false
  };

  @ViewChild(SwiperComponent, {static: false}) componentRef?: SwiperComponent;
  slides = [
    'First slide',
    'Second slide',
    'Third slide',
    'Fourth slide',
    'Fifth slide',
    'Sixth slide'
  ];
  time: any;
  counter = 0;
  showFiller = false;

  constructor(private routes: Router) {
  }

  ngOnInit(): void {
    this.timer();
  }

  books(value: any) {
    if (value === 'all') {
      this.show = 'all';
    } else if (value === 'action') {
      this.show = 'action';
    } else if (value === 'adventure') {
      this.show = 'adventure';
    } else if (value === 'fiction') {
      this.show = 'fiction';
    } else if (value === 'horror') {
      this.show = 'horror';
    } else {
      this.show = 'all';
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event) {
    this.scroll = window.pageYOffset >= 50;

  }

  onIndexChange(index: number) {
    this.selected = index;
  }

  auth() {
    this.routes.navigate(['./auth']);
  }

  timer() {
    this.time = setInterval(() => {
      this.counter = this.counter + 1;
      if (this.counter === 1000) {
        clearInterval(this.time);
      }
    }, 10);
  }
}
