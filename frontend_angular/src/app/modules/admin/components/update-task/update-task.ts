import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-task',
  imports: [],
  templateUrl: './update-task.html',
  styleUrl: './update-task.scss'
})
export class UpdateTask {
  id: number;

  constructor(private service:AdminService, 
    private route: ActivatedRoute) {
      this.id = this.route.snapshot.params['id'];
      this.getTaskById();
    }

    getTaskById(){
      this.service.getTaskById(this.id).subscribe((res)=>{
        console.log(res);
      })

    }
  

}
