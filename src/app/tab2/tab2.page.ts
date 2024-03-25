import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, Platform } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { ExpenseCategoryComponent } from '../components/categories/expense-category/expense-category.component';
import { IncomeCategoryComponent } from '../components/categories/income-category/income-category.component';
import { GoalCategoryComponent } from '../components/categories/goal-category/goal-category.component';
import { HeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ExpenseCategoryComponent, IncomeCategoryComponent, GoalCategoryComponent, HeaderComponent]
})

export class Tab2Page {
  public view:any;
  public icons:any = [
    'add'
  ];
  public selectedSegment:string = 'expense';
  public segmentValue:string = 'expense';

  constructor(private platform: Platform) { 
    // addIcons(this.icons)
  }

  ngOnInit() {
  }

  add(type:string){
  }



}
