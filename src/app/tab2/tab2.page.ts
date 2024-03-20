import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, Platform } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { ExpenseCategoryComponent } from '../components/categories/expense-category/expense-category.component';
import { IncomeCategoryComponent } from '../components/categories/income-category/income-category.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ExpenseCategoryComponent, IncomeCategoryComponent]
})

export class Tab2Page {
  public view:any;
  public icons:any = [
    'add'
  ];
  public selectedSegment:string = 'expense';
  public segmentValue:string = 'expense';

  constructor(private platform: Platform) { 
    addIcons(this.icons)
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize(event: Event) {
    // Handle window resize event
  }

  handleScreenSizeChange() {
    const width = this.platform.width();
    const height = this.platform.height();
    if(width > height) {
      this.view = [0.9 * width, 0.9 * height]
    } else {
      this.view = [0.95 * width, 0.35 * height]
    }


  }

  ngOnInit() {
  }

  add(type:string){
  }



}
