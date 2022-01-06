import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginModel } from './candidate-login/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private http:HttpClient) { }

  login(data:any){
    console.log(data);
    
    return this.http.get('http://127.0.0.1:8000/login',data);
  }
}
