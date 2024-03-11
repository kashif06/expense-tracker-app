import { Component, ElementRef, OnInit, ViewChild, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';
import Swiper from 'swiper';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.page.html',
  styleUrls: ['./journey.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class JourneyPage implements OnInit {
  @ViewChild('mainSwiper')
  mainSwiperRef: ElementRef | undefined;
  mainSwiper?: Swiper ;
  list:any = []
  progress:number = 0.0
  counter:number = 1;
  selectedBanks: string[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  swiperSlideChanged(e: any) {
    console.log('changed: ', e);
  }
 
  swiperReady() {
    this.mainSwiper = this.mainSwiperRef?.nativeElement.swiper;
  }

  ngAfterViewInit() {
    this.initializeMainSwiper();
  }

  async initializeMainSwiper() {
    await this.mainSwiperRef?.nativeElement.swiper;
    this.mainSwiper = this.mainSwiperRef?.nativeElement.swiper;
  }

  nextSlide() {
    console.log(this.counter);
    if(this.counter < 3) {
      this.progress += 0.50
      this.counter += 1;
    }
    else {
      this.router.navigate(['/tabs/tab1'], { replaceUrl: true })
    }
    this.mainSwiper?.slideNext(500);
  }
  
  previousSlide() {
    this.progress -= 0.50
    this.counter -= 1;
    this.mainSwiper?.slidePrev(500);
  }

}
