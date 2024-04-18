// crud.service.ts
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Create_User } from '../models/createuser'; 
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  baseURL: string = "http://localhost:5056/api/User/";

  constructor(private http: HttpClient) { }

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.baseURL + 'GetAll');
  }

  create(data: Create_User): Observable<Create_User> {
    return this.http.post<Create_User>(this.baseURL + 'CreateUser/register', data)
  }

  getById(id: number): Observable<Create_User> {
    return this.http.get<Create_User>(this.baseURL + `GetByUserId?id=${id}`);
  }

  update(id: number, data: Create_User): Observable<Create_User> {
    return this.http.put<Create_User>(this.baseURL + `UpdateUser?id=${id}`, data)
  }

  delete(id: number): Observable<boolean> {
    return this.http.delete<boolean>(this.baseURL + `DeleteUser?id=${id}`);
  }

} 