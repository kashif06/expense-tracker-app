import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA, Input, ViewChild, ElementRef  } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ModalController } from '@ionic/angular';
import { SaveGoalComponent } from 'src/app/modal/save-goal/save-goal.component';
import { ListGoalComponent } from 'src/app/modal/list-goal/list-goal.component';

@Component({
  selector: 'app-goal-category',
  templateUrl: './goal-category.component.html',
  styleUrls: ['./goal-category.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class GoalCategoryComponent  implements OnInit {
  @Input() segment?: string;
  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  toggleBudget() {

  }

  getExpenseStatusColor() {
    return 'success';
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: SaveGoalComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      // this.message = `Hello, ${data}!`;
    }
  }
  
  async openModal2() {
    const modal = await this.modalCtrl.create({
      component: ListGoalComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      // this.message = `Hello, ${data}!`;
    }
  }

}
