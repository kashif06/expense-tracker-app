import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { IonInput, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardContent, IonButton } from '@ionic/angular/standalone';
// import type { IonInput } from '@ionic/angular';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, ReactiveFormsModule, IonInput, IonContent,IonCard, IonCardContent, IonButton]
})
export class RegisterPage implements OnInit {
  firstName = '';
  lastName = '';
  public loginForm: FormGroup;

  @ViewChild('ionInputEl', { static: true }) ionInputEl!: IonInput;
  @ViewChild('ionInputEl2', { static: true }) ionInputEl2!: IonInput;

  constructor(private router: Router, public formBuilder: FormBuilder) { 
    this.loginForm = formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    })
  }

  ngOnInit() {
  }

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

  sendOtp() {
    this.router.navigate(['/otp'])
  }
  
  goToLogin() {
    this.router.navigate(['/login'])
  }


}
