import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CaptchaService } from '../captcha.service';

@Component({
  selector: 'app-captcha',
  templateUrl: './captcha.component.html',
  styleUrls: ['./captcha.component.css'],
})
export class CaptchaComponent implements OnInit {
  constructor(private _captchaService:CaptchaService) {}
  captcha!: FormGroup;
  capImage!: string;
  capText!: string;
  ngOnInit(): void {
    this.captcha = new FormGroup({
      capImage: new FormControl('', [Validators.nullValidator]),
      capText: new FormControl('', [Validators.required]),
    });
    this.generateCaptcha();
    this.getCaptcha();
  }
  onSubmit(captcha: FormGroup) {
    // console.log('on Submit called');
    //this.capImage=captcha.get('capImage')?.value;
    this.capText = captcha.get('capText')?.value;
   // console.log(this.capImage + 'on Submit called' + this.capText);
  }
  public generateCaptcha() {
    var alpha = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      '0',
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
    ];
    let a = alpha[Math.floor(Math.random() * 62)];
    let b = alpha[Math.floor(Math.random() * 62)];
    let c = alpha[Math.floor(Math.random() * 62)];
    let d = alpha[Math.floor(Math.random() * 62)];
    let e = alpha[Math.floor(Math.random() * 62)];
    let f = alpha[Math.floor(Math.random() * 62)];

    let final = a + b + c + d + e + f;
    this.capImage = final;
  }
  validcap(data:String) {
    let stg1 = this.capImage;
   // let stg2 = this.capText;
   let stg2 = data;
    //console.log(this.capImage + ' = ' + this.capText);

    if (stg1 == stg2) {
      alert('Form is validated Succesfully');
      return true;
    } else {
      alert('Please enter a valid captcha');
      return false;
    }
  }
  isValid!: boolean;
  getCaptcha(){
    this._captchaService.validateCaptcha$.subscribe(validate=>
      {  
      //  console.log(this.validcap(validate));
            
     return this.validcap(validate);
    }
    );
  }
}
