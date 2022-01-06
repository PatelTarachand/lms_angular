import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { AdmissionFormData } from './candidate-admission-form/AdmissionFormData';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PreviewAdmissionFormComponent } from './preview-admission-form/preview-admission-form.component';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class AdmissionFormService {

  token!: Object;
  url: any = 'http://127.0.0.1:8000';
  constructor(private http: HttpClient) {
    this.getToken1();

  }

  public saveDataToService(
    formData: AdmissionFormData
  ): Observable<AdmissionFormData> {
    console.log(formData);

    let header = new HttpHeaders().set('Content-type', 'application/json');
    let options = { headers: header };
    return this.http.post<AdmissionFormData>(
      '/api/admData1',
      formData,
      options
    );
  }

  public getToken(){

    return this.http.get(this.url + '/token');
  }



  public getCountry() {
    let header = new HttpHeaders().set('Content-type', [
      'application/json',
       'Access-Control-Allow-Origin: *',
       'Access-Control-Allow-Methods: *',
       'Access-Control-Allow-Headers: *',
       'X-CSRF-TOKEN: '

    ]);
    let options = { headers: header };


    return this.http.get(this.url + '/get-country', options);
  }

  getState(data: number){
    console.log(data);
  //  let json= JSON.stringify(data);

  //  console.log("json data"+ json);

    return this.http.post(this.url + '/get-states-by-country/'+data,null);
  }

  getCities(state_id: number) {
   // let json= JSON.stringify(state_id);
    return this.http.post(this.url + '/get-cities-by-state/'+state_id,state_id);
  }

  public getToken1(){

    this.getToken().subscribe(res=>{
      this.token=res;
      console.log(this.token);

    }

      );

  }

  public getCourse(){
    let header = new HttpHeaders().set('Content-type', [
      'application/json',
       'Access-Control-Allow-Origin: *',
       'Access-Control-Allow-Methods: *',
       'Access-Control-Allow-Headers: *',
       'X-CSRF-TOKEN: '

    ]);
    let options = { headers: header };


    return this.http.get(this.url + '/get-course', options);
  }


  register(data: FormData) {
      let json= JSON.stringify(data);
      console.log(data);

      return this.http.post(this.url + '/register',data,{responseType: 'text'});
   }


      public editDataDetails!: AdmissionFormData;
      public subject = new Subject<AdmissionFormData>();
      private messageSource = new BehaviorSubject(this.editDataDetails);
      currentMessage = this.messageSource.asObservable();
      changeMessage(message: AdmissionFormData) {
        this.messageSource.next(message);
      }
}
