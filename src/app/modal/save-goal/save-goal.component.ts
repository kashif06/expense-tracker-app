import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-save-goal',
  templateUrl: './save-goal.component.html',
  styleUrls: ['./save-goal.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class SaveGoalComponent {

  amount:number = 50000;

  constructor(private modalCtrl: ModalController, private alertController: AlertController) {}

  @ViewChild('ionInputEl', { static: true }) ionInputEl!: IonInput;

  onInputNumber(ev:any) {
    const value = ev.target!.value;
    // Removes non alphanumeric characters
    const filteredValue = value.replace(/[^0-9]+/g, '');
    this.ionInputEl.value = this.amount = filteredValue;
  }

  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }

  // confirm() {
  //   return this.modalCtrl.dismiss(null, 'confirm');
  // }

  async confirm() {
    const alert = await this.alertController.create({
      header: 'Success',
      // subHeader: 'Your OTP is confirmed!',
      message: 'Amount saved successfull!',
      buttons: [
        {
          text: 'OK',
          handler: (data: any) => {
            // this.router.navigate(['/login'])
          }
        },
      ],
    });

    await alert.present();
  }

}
