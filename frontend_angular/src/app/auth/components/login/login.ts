import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCard, MatCardTitle, MatCardContent, MatCardActions, MatCardModule } from "@angular/material/card";
import { MatLabel, MatFormField, MatError, MatFormFieldModule } from "@angular/material/form-field";
import { MatIcon, MatIconModule } from "@angular/material/icon";
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../services/auth/auth.service';
import { StorageService } from '../../services/storage/storage.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.scss'],
  imports: [
    MatLabel,
    MatFormField,
    MatError,
    MatCardActions,
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ]
})
export class Login {
  loginForm!: FormGroup;
  hidePassword = true;


  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
  private snackbar: MatSnackBar,
private router : Router,
private storageService: StorageService
) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  togglePasswordVisibility() {
    this.hidePassword = !this.hidePassword;
  }

  onSubmit() {
      console.log(this.loginForm.value);

      this.authService.login(this.loginForm.value).subscribe((res)=>{
        console.log(res);

        if (res.userId != null) {
          const user = {
            id: res.userId,
            role: res.userRole
          };

          StorageService.saveUser(user);
          StorageService.saveToken(res.jwt);

          if (StorageService.isAdminLoggedIn()) 
            this.router.navigateByUrl("/admin/dashboard");
          else if (StorageService.isEmployeeLoggedIn())
           this.router.navigateByUrl("/employee/dashboard");
            this.snackbar.open("Login successful", "Close", { duration: 5000 });
}else{
                      this.snackbar.open("Invalid Credentials", "Close", { duration: 5000, panelClass: "error-snackbar" })
        }
      })
    }
    
  }
