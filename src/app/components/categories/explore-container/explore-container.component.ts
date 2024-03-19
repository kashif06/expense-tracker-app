import { Component, Input } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ModalController } from '@ionic/angular';
import { EditExpenseComponent } from '../../../modal/edit-expense/edit-expense.component';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class ExploreContainerComponent {
  @Input() name?: string;
  selectedType: string = '';
  amount: number = 0;
  amountInput: any;
  description: string = '';
  descriptionInput: any;
  items: any = [];
  datetimeValue: any = '';

  typeOptions = [
    { value: 'income', label: 'Income' },
    { value: 'expense', label: 'Expense' },
    { value: 'transfer', label: 'Transfer' } // Add more options as needed
  ];

  constructor(private modalCtrl: ModalController) {
    this.items = [
      {price: 500, description: "Chicken"},
      {price: 200, description: "Milk"},
      {price: 700, description: "Oil"},
      {price: 120, description: "Chocolate"},
      {price: 20, description: "Banana"},
      {price: 60, description: "Strawberry"},
      {price: 200, description: "Apple"},
    ]
  }

  handleChange(e:any) {
    console.log('ionChange fired with value: ' + e.detail.value);
  }

  handleCancel() {
    console.log('ionCancel fired');
  }

  handleDismiss() {
    console.log('ionDismiss fired');
  }


  addItem() {
    this.amount = this.amountInput;
    this.description = this.descriptionInput;

    // Do something with the retrieved values
    console.log("Amount:", this.amount, "Description:", this.description);

    this.items.unshift({price:100,description:"new item"})
  }

  deleteItem(item:any) {

  }

  onDateChange(event:any) {
    const selectedDate = event.detail.value;

    console.log(selectedDate);
    // Update the "datetimeValue" element with the selected date
    // this.datetimeValue = selectedDate.toISOString(); // Example formatting
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: EditExpenseComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      // this.message = `Hello, ${data}!`;
    }
  }
  
}
