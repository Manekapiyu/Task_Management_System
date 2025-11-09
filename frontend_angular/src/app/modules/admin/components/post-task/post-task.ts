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
addEmployee() {
throw new Error('Method not implemented.');
}
  taskForm!: FormGroup;
  listOfPriorities: string[] = ['LOW', 'MEDIUM', 'HIGH'];
newEmployeeEmail: any;
newEmployeeName: any;
listOfEmployees = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Alice Johnson' },
  { id: 4, name: 'Bob Williams' }
];

  constructor(private adminService: AdminService
    , private fb: FormBuilder,
  private snackBar:MatSnackBar,
private router:Router  ) {
    this.taskForm = this.fb.group({
      employeeId: [null, Validators.required],
      title: [null, Validators.required],
      description: [null, Validators.required],
      dueDate: [null, Validators.required],
      priority: [null, Validators.required],
    });
    this.getUsers();
  }

  getUsers() {
    this.adminService.getUsers().subscribe((res) => {
      this.listOfEmployees = res;
      console.log('Employees: Jhon', res);
    });
  }

  postTask() {
      console.log( this.taskForm.value);
     this.adminService.postTask(this.taskForm.value).subscribe((res)=>{
      if(res.id != null){
        this.snackBar.open("Task posted successfully","Close",{duration:5000})
        this.router.navigateByUrl("/admin/dashboard");

      }else{
        this.snackBar.open("Something wrong","ERROR",{duration:5000});
      }
     })
    }
  }

