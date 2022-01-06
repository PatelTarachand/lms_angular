import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Candidate } from './candidate-profile-details/Candidate';
import { CandidateInterface} from './candidate-profile-details/CandidateInterface';

@Injectable({
  providedIn: 'root'
})
export class CandidateProfileDetailsService {
  
  url:string="http://127.0.0.1:8000/";
  constructor(private httpClient:HttpClient) { }
  update(formData: any) {
    console.log(formData);
    
    return this.httpClient.post(this.url+'update',formData,{responseType: 'text'});
  }
  getCountry() {
    let header = new HttpHeaders().set('Content-type', [
      'application/json',
       'Access-Control-Allow-Origin: *',
       'Access-Control-Allow-Methods: *',
       'Access-Control-Allow-Headers: *',
       'X-CSRF-TOKEN: '

    ]);
    let options = { headers: header };


    return this.httpClient.get(this.url+'get-country', options);
  }
  getCities(state_id: any) {
    return this.httpClient.post(this.url+'get-cities-by-state/'+state_id,state_id);
  }
  getState(country_id: any) {
    return this.httpClient.post(this.url+'get-states-by-country/'+country_id,null);
  }
  getCourses() {
    return this.httpClient.get(this.url+"get-course");
  }
  

  getCandidateDetails(candidateId: number):Observable<any>{
    return this.httpClient.get(this.url+"get-student-details/"+candidateId);
  }
}
