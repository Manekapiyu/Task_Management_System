import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../services/auth/auth.service';


@Component({
  selector: 'app-signup',
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './signup.html',
  styleUrls: ['./signup.scss']
})
export class Signup {
  hidePassword = true;
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private authService: AuthService
  ) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    });
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }


  onSubmit() {
  if (this.signupForm.valid) {
    console.log("Form Submitted:", this.signupForm.value);
  } else {
    console.log("Invalid Form:", this.signupForm.errors);
  }
}

}
