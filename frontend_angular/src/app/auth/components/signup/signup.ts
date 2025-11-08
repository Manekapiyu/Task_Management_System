import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../services/auth/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


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
  styleUrls: ['./signup.scss'],
})
export class Signup {
  hidePassword = true;
  signupForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private authService: AuthService,
    private snackbar:MatSnackBar,
    private router:Router
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
  console.log(this.signupForm.value);
  const password = this.signupForm.get("password")?.value;
  const confirmPassword = this.signupForm.get("confirmPassword")?.value; 
  if(password.trim() !== confirmPassword.trim()){
    this.snackbar.open("Passwords do not match","Close",{duration:5000, panelClass:"error-snackbar"});
    return;
  }
this.authService.signup(this.signupForm.value).subscribe({
  next: (res) => {
    console.log(res);
    if (res.id != null) {
      this.snackbar.open("Signup successful", "Close", { duration: 5000 });
      this.router.navigateByUrl("/login");
    } else {
      this.snackbar.open("Signup failed. Try again", "Close", {
        duration: 5000,
        panelClass: "error-snackbar",
      });
    }
  },
  error: (err) => {
    console.error(err);
    this.snackbar.open("Signup error: " + err.message, "Close", {
      duration: 5000,
      panelClass: "error-snackbar",
    });
  },
});

  }
}
