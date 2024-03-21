import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, Input, ViewChild, ElementRef  } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { IonInput } from '@ionic/angular';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-expense-category',
  templateUrl: './expense-category.component.html',
  styleUrls: ['./expense-category.component.scss'],
  standalone: true,
  imports: [CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ExpenseCategoryComponent  implements OnInit {
  @Input() segment?: string;
  @Input() view: any;
  @ViewChild('ionInputExpenseNumber', { static: true }) ionInputExpenseNumber!: IonInput;
  expenseBudget?:number ;
  toggleBudgetCard: boolean = true;

  @ViewChild('barCanvas1') private barCanvas1?: ElementRef;
  @ViewChild('barCanvas2') private barCanvas2?: ElementRef;

  barChart1: any;
  barChart2: any;
  
  constructor() {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    this.barChartMethod1();
    this.barChartMethod2();
  }


  barChartMethod1() {
    // Now we need to supply a Chart element reference with an object that defines the type of chart we want to use, and the type of data we want to display.
    this.barChart1 = new Chart(this.barCanvas1?.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar'],
        datasets: [{
            type: 'bar',
            label: 'Expenses',
          data: [25000, 30000, 11000],
        },
        {
          type: 'line',
          label: 'Total Budget',
        data: [25000, 25000, 25000],
      }]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          // yAxes: [{
          //   ticks: {
          //     beginAtZero: true
          //   }
          // }]
        }
      }
    });
  }
  
  barChartMethod2() {
    this.barChart2 = new Chart(this.barCanvas2?.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar'],
        datasets: [{
          label: '',
          data: [7000, 6000, 1000],
          backgroundColor: [
            'rgba(255, 99, 132, 0.1)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          // yAxes: [{
          //   ticks: {
          //     beginAtZero: true
          //   }
          // }]
        }
      }
    });
  }

  // barChartMethod2() {
  //   // Now we need to supply a Chart element reference with an object that defines the type of chart we want to use, and the type of data we want to display.
  //   this.barChart2 = new Chart(this.barCanvas2?.nativeElement, {
  //     type: 'bar',
  //     data: {
  //       labels: ['Jan', 'Feb', 'Mar'],
  //       datasets: [{
  //           label: '2022',
  //         // label: 'Expense',
  //         data: [25000, 30000, 11000],
  //         backgroundColor: [
  //           'rgba(255, 99, 132, 0.2)',
  //           'rgba(54, 162, 235, 0.2)',
  //           'rgba(255, 206, 86, 0.2)',
  //           'rgba(75, 192, 192, 0.2)',
  //           'rgba(153, 102, 255, 0.2)',
  //           'rgba(255, 159, 64, 0.2)'
  //         ],
  //         borderColor: [
  //           'rgba(255,99,132,1)',
  //           'rgba(54, 162, 235, 1)',
  //           'rgba(255, 206, 86, 1)',
  //           'rgba(75, 192, 192, 1)',
  //           'rgba(153, 102, 255, 1)',
  //           'rgba(255, 159, 64, 1)'
  //         ],
  //         borderWidth: 1
  //       },
  //       {
  //         label: '2023',
  //       // label: 'Expense',
  //       data: [28000, 27000, 29000],
  //       backgroundColor: [
  //         'rgba(255, 99, 132, 0.2)',
  //         'rgba(54, 162, 235, 0.2)',
  //         'rgba(255, 206, 86, 0.2)',
  //         'rgba(75, 192, 192, 0.2)',
  //         'rgba(153, 102, 255, 0.2)',
  //         'rgba(255, 159, 64, 0.2)'
  //       ],
  //       borderColor: [
  //         'rgba(255,99,132,1)',
  //         'rgba(54, 162, 235, 1)',
  //         'rgba(255, 206, 86, 1)',
  //         'rgba(75, 192, 192, 1)',
  //         'rgba(153, 102, 255, 1)',
  //         'rgba(255, 159, 64, 1)'
  //       ],
  //       borderWidth: 1
  //     }]
  //     },
  //     options: {
  //       maintainAspectRatio: false,
  //       responsive: true,
  //       scales: {
  //         // yAxes: [{
  //         //   ticks: {
  //         //     beginAtZero: true
  //         //   }
  //         // }]
  //       }
  //     }
  //   });
  // }

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

  handleChange(e:any) {
    console.log('ionChange fired with value: ' + e.detail.value);
    this.updateChartData(e.detail.value);
  }
  
  handleChange2(e:any) {
    console.log('ionChange fired with value: ' + e.detail.value);
    this.updateChartData2(e.detail.value);
  }

  updateChartData(selectedValue: string) {
    let newData: number[] = [];
    let newDataBudget:number[] = [];
    let newLabel: string[] = [];
    if (selectedValue === '3') {
      newData = [25000, 30000, 11000];
      newDataBudget = [30000, 30000, 30000];
      newLabel = ['Jan', 'Feb', 'Mar'];
    } else if (selectedValue === '6') {
      newData = [25000, 30000, 31000, 33000, 20000, 29000];
      newDataBudget = [30000, 30000, 30000, 30000, 30000, 30000];
      newLabel = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];
    }
    else {
      newData = [25000, 30000, 31000, 33000, 20000, 29000, 25000, 30000, 31000, 33000, 20000, 29000];
      newDataBudget = [30000, 30000, 30000, 30000, 30000, 30000, 30000, 30000, 30000, 30000, 30000, 30000];
      newLabel = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',  'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];
    }
  
    // Update the chart's data
    this.barChart1.data.labels = newLabel;
    this.barChart1.data.datasets[0].data = newData;
    this.barChart1.data.datasets[1].data = newDataBudget;
  
    // Re-render the chart to reflect the updated data
    this.barChart1.update();
  }

  updateChartData2(selectedValue: string) {
    let newData: number[] = [];
    let newDataBudget:number[] = [];
    let newLabel: string[] = [];
    if (selectedValue === '3') {
      newData = [25000, 30000, 11000];
      newDataBudget = [30000, 30000, 30000];
      newLabel = ['Jan', 'Feb', 'Mar'];
    } else if (selectedValue === '6') {
      newData = [25000, 30000, 31000, 33000, 20000, 29000];
      newDataBudget = [30000, 30000, 30000, 30000, 30000, 30000];
      newLabel = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];
    }
    else {
      newData = [25000, 30000, 31000, 33000, 20000, 29000, 25000, 30000, 31000, 33000, 20000, 29000];
      newDataBudget = [30000, 30000, 30000, 30000, 30000, 30000, 30000, 30000, 30000, 30000, 30000, 30000];
      newLabel = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',  'Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar'];
    }
  
    // Update the chart's data
    this.barChart2.data.labels = newLabel;
    this.barChart2.data.datasets[0].data = newData;
  
    // Re-render the chart to reflect the updated data
    this.barChart2.update();
  }
  

  handleCancel() {
    console.log('ionCancel fired');
  }

  handleDismiss() {
    
  }
  
  handleCancel2() {
    console.log('ionCancel fired');
  }

  handleDismiss2() {
    
  }
  

}
