import { Component, OnInit } from '@angular/core';
import { LoginModel } from './login.model';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-candidate-login',
  templateUrl: './candidate-login.component.html',
  styleUrls: ['./candidate-login.component.css']
})
export class CandidateLoginComponent implements OnInit {

  login = new LoginModel();
  dada: any;
  status: any;
  message: any;
  captchaText!: String;
  capImage!: string;
  constructor(private _loginService:LoginService,
        private route:Router      
    ) { }

  ngOnInit(): void {
    this.generateCaptcha();
  }
 loginCandidate(){

  if (this.validcap(this.captchaText) == true) {
      
    this.requestLogin(this.login);
  }else{
    
  }
    
 }
 requestLogin(data: any) {
  // console.log(data);
  
  this._loginService.login(data).subscribe(
    (res: any) => {
      console.log(res);
      this.dada=res;
      this.status=res.status;
      if(this.status==1){
        this.route.navigate(['/candidatehome']);
      }else{
        this.message=res.message;
        alert(this.message);
      }

    },
    (err: any) => console.log(err),
    () => console.log('getCities completed')
  );
}

// validateCaptcha(){
  //   console.log(this.admissionForm.get('captchaText')?.value);

  //   this._validateCaptcha.validateCaptcha(this.admissionForm.get('captchaText')?.value);
  // }
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
  validcap(data: String) {
    let stg1 = this.capImage;
    // let stg2 = this.capText;
    let stg2 = data;
    console.log(this.capImage + ' = ' + data);

    if (stg1 == stg2) {
      //alert('Form is validated Succesfully');
      return true;
    } else {
      alert('Please enter a valid captcha');
      return false;
    }
  }
}
