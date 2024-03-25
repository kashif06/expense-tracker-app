import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.page.html',
  styleUrls: ['./otp.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class OtpPage implements OnInit {

  constructor(private alertController: AlertController, private router: Router) { }

  ngOnInit() {
  }

  async confirm() {
    const alert = await this.alertController.create({
      // header: 'Your OTP is confirmed!',
      subHeader: 'Your OTP is confirmed!',
      // message: 'Your OTP is confirmed!',
      buttons: [
        {
          text: 'OK',
          handler: (data: any) => {
            this.router.navigate(['/login'])
          }
        },
      ],
    });

    await alert.present();
  }

  async resendOTP() {
    const alert = await this.alertController.create({
      mode: 'ios',
      header: 'OTP Resent',
      // subHeader: 'Your OTP is confirmed!',
      message: 'Please check your spam if needed',
      buttons: [
        {
          text: 'OK',
          handler: (data: any) => {
            
          }
        },
      ],
    });

    await alert.present();
  }

}
