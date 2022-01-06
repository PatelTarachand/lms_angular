import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CaptchaService {

  isCaptchaValidate!: boolean;
  constructor() { }
  private _validateFormSource = new Subject<String>();
  validateCaptcha$ = this._validateFormSource.asObservable();
  validateCaptcha(validateCap: String){
   // console.log("validateService "+validateCap);
    
     this._validateFormSource.next(validateCap);
  //  console.log(this._validateFormSource);
    
  }
}
