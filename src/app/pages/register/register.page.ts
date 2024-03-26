import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import type { IonInput } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class RegisterPage implements OnInit {
  firstName = '';
  lastName = '';

  @ViewChild('ionInputEl', { static: true }) ionInputEl!: IonInput;
  @ViewChild('ionInputEl2', { static: true }) ionInputEl2!: IonInput;

  onInputFirstName(ev:any) {
    const value = ev.target!.value;

    // Removes non alphanumeric characters
    const filteredValue = value.replace(/[^a-zA-Z0-9]+/g, '');

    /**
     * Update both the state variable and
     * the component to keep them in sync.
     */
    this.ionInputEl.value = this.firstName = filteredValue;
  }
  
  onInputlastName(ev:any) {
    const value = ev.target!.value;

    // Removes non alphanumeric characters
    const filteredValue = value.replace(/[^a-zA-Z0-9]+/g, '');

    /**
     * Update both the state variable and
     * the component to keep them in sync.
     */
    this.ionInputEl2.value = this.lastName = filteredValue;
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

  sendOtp() {
    this.router.navigate(['/otp'])
  }
  
  goToLogin() {
    this.router.navigate(['/login'])
  }


}
