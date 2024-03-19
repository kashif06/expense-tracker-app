import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, Input, ChangeDetectorRef, ViewChild  } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { IonInput} from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { SaveUpdateIncomeExpenseComponent } from 'src/app/modal/save-update-income-expense/save-update-income-expense.component';

@Component({
  selector: 'app-income-category',
  templateUrl: './income-category.component.html',
  styleUrls: ['./income-category.component.scss'],
  standalone: true,
  imports: [CommonModule, SaveUpdateIncomeExpenseComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class IncomeCategoryComponent  implements OnInit {
  @Input() segment?: string;
  @ViewChild('ionInputExpenseNumber', { static: true }) ionInputExpenseNumber!: IonInput;
  expenseBudget?:number ;
  toggleBudgetCard: boolean = true;
  
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  onInput(ev:any) {
    const value = ev.target!.value;
    // Removes non alphanumeric characters
    const filteredValue = value.replace(/[^0-9]+/g, '');
    this.expenseBudget = filteredValue;
  }

  async addIncome() {
    const modal = await this.modalCtrl.create({
      component: SaveUpdateIncomeExpenseComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      // this.message = `Hello, ${data}!`;
    }
  }

}
