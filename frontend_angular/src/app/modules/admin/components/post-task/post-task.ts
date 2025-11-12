import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../services/admin.service';

// Angular Material Modules
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

// ✅ Define Employee type
interface Employee {
  id: number;
  name: string;
}

@Component({
  selector: 'app-post-task',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './post-task.html',
  styleUrls: ['./post-task.scss']
})
export class PostTask {
  taskForm: FormGroup;
  listOfEmployees: Employee[] = [];
  listOfPriorities: string[] = ['LOW', 'MEDIUM', 'HIGH'];

  constructor(
    private adminService: AdminService,
    private fb: FormBuilder,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    // ✅ Initialize the form
    this.taskForm = this.fb.group({
      employeeId: [null, Validators.required],
      title: [null, Validators.required],
      description: [null, Validators.required],
      dueDate: [null, Validators.required],
      priority: [null, Validators.required],
    });

    this.getUsers();
  }

  // ✅ Fetch employees safely
  getUsers() {
    this.adminService.getUsers().subscribe({
      next: (res: Employee[] | null) => {
        this.listOfEmployees = res?.filter((e): e is Employee => !!e) || [];
        console.log('Employees:', this.listOfEmployees);
      },
      error: (err) => {
        console.error('Error fetching employees', err);
        this.listOfEmployees = [];
      }
    });
  }

  // ✅ Post task
  postTask() {
    if (this.taskForm.invalid) return;

    this.adminService.postTask(this.taskForm.value).subscribe({
      next: (res: any) => {
        if (res?.id != null) {
          this.snackBar.open('Task posted successfully', 'Close', { duration: 5000 });
          this.router.navigateByUrl('/admin/dashboard');
        } else {
          this.snackBar.open('Something went wrong', 'ERROR', { duration: 5000 });
        }
      },
      error: (err) => {
        console.error('Error posting task', err);
        this.snackBar.open('Server error', 'ERROR', { duration: 5000 });
      }
    });
  }
}
