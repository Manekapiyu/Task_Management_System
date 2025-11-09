import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../../../auth/services/storage/storage.service';

const BASIC_URL = "http://localhost:8080/";

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient, private storage: StorageService) {}

  // Get all users
  getUsers(): Observable<any> {
    return this.http.get(BASIC_URL + "api/admin/users", {
      headers: this.createAuthorizationHeader()
    });
  }

postTask(taskDTO: any): Observable<any> {
  return this.http.post(BASIC_URL + "api/admin/task", taskDTO, {
   headers: new HttpHeaders({
  'Authorization': 'Bearer ' + StorageService.getToken(),
  'Content-Type': 'application/json'
})
  });
}

getAllTasks():Observable<any>{
  return this.http.get(BASIC_URL + "api/admin/tasks" ,{
    headers:this.createAuthorizationHeader()
  })
}



private createAuthorizationHeader(): HttpHeaders {
  const token = StorageService.getToken(); 
  return new HttpHeaders().set('Authorization', 'Bearer ' + token);
}


  }

  

  

