import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-save-update-income-expense',
  templateUrl: './save-update-income-expense.component.html',
  styleUrls: ['./save-update-income-expense.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class SaveUpdateIncomeExpenseComponent{

  constructor(private modalCtrl: ModalController) {}

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  confirm() {
    return this.modalCtrl.dismiss(null, 'confirm');
  }

}
