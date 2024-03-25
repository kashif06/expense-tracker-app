import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-goal',
  templateUrl: './list-goal.component.html',
  styleUrls: ['./list-goal.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})

export class ListGoalComponent  implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  closeModal() {
    this.modalController.dismiss();
  }

}
