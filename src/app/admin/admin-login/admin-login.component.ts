import { Component, OnInit } from '@angular/core';
import { LoginModel } from '../../candidate/candidate-login/login.model';
import { AdminLoginService } from '../admin-login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  login = new LoginModel();
  dada: any;
  status: any;
  message: any;
  captchaText!: String;
  capImage!: string;
  constructor(private _loginService: AdminLoginService,
    private route: Router
  ) { }

  ngOnInit(): void {
    this.generateCaptcha();
    // this.loginCandidate();
  }

  loginAdmin() {
    //alert("hello");

    if (this.validcap(this.captchaText) == true) {

      this.requestLogin(this.login);
    } else {

    }

  }
  requestLogin(data: any) {
    // console.log(data);

    this._loginService.login(data).subscribe(
      (res: any) => {
        if(res.status=="success"){
          if(res.user_type=="admin"){
             sessionStorage.setItem('auth_token',res.token);
            //alert("varified");
            this.route.navigate(['/adminhome']);
          }
        }else{
          alert(res.error);
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
  // tslint:disable-next-line:typedef
  validcap(data: String) {
    let stg1 = this.capImage;
    // let stg2 = this.capText;
    let stg2 = data;
    console.log(this.capImage + ' = ' + data);

    if (stg1 == stg2) {
      // alert('Form is validated Succesfully');
      return true;
    } else {
      alert('Please enter a valid captcha');
      return false;
    }
  }

}
