import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, Input, ViewChild, ElementRef  } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { IonInput } from '@ionic/angular';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-expense-category',
  templateUrl: './expense-category.component.html',
  styleUrls: ['./expense-category.component.scss'],
  standalone: true,
  imports: [CommonModule, NgxChartsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ExpenseCategoryComponent  implements OnInit {
  @Input() segment?: string;
  @Input() view: any;
  @ViewChild('ionInputExpenseNumber', { static: true }) ionInputExpenseNumber!: IonInput;
  expenseBudget?:number ;
  toggleBudgetCard: boolean = true;

  single: any[] = [];
  multi: any[] = [];
  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Country';
  showYAxisLabel = true;
  yAxisLabel = 'Population';

  // colorScheme = '#5AA454';

  colorScheme:any = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  
  constructor() { 
    // Object.assign(this, { this.single })
  }

  ngOnInit() {
    this.single = [
      {
        "name": "Germany",
        "value": 8940000
      },
      {
        "name": "USA",
        "value": 5000000
      },
      {
        "name": "France",
        "value": 7200000
      }
    ];
  }

  ngAfterViewInit() {
  }

  onSelect(event:any) {
    console.log(event);
  }

  onInput(ev:any) {
    const value = ev.target!.value;
    // Removes non alphanumeric characters
    const filteredValue = value.replace(/[^0-9]+/g, '');
    this.expenseBudget = filteredValue;
  }

  setBudget() {
    console.log(this.expenseBudget);
    this.toggleBudgetCard = !this.toggleBudgetCard;
  }

  getExpenseStatusColor() {
    return 'success';
  }

  toggleBudget() {
    this.toggleBudgetCard = !this.toggleBudgetCard;
  }

}
