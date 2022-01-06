import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApproveReject } from './approve-reject';

@Injectable({
  providedIn: 'root'
})
export class CandidateListService {

  // tslint:disable-next-line:no-any
  url: any = 'http://127.0.0.1:8000';

  constructor(private http: HttpClient) {
    this.getToken1();
}

  // tslint:disable-next-line:ban-types
  token!: Object;
  // public showSpinner: BehaviorSubject<boolean> = new BehaviorSubject(false);

// tslint:disable-next-line:typedef
public getToken(){
  return this.http.get(this.url + '/token');
}

// tslint:disable-next-line:typedef
 getStudentList() { // Get All Candidate List
  // tslint:disable-next-line:prefer-const
  let header = new HttpHeaders().set('Content-type', [
    'application/json',
     'Access-Control-Allow-Origin: *',
     'Access-Control-Allow-Methods: *',
     'Access-Control-Allow-Headers: *',
     'X-CSRF-TOKEN: '
  ]);
  // Student List
  // tslint:disable-next-line:prefer-const
  let options = { headers: header };
  return this.http.get(this.url + '/get-student-list' , options);
}

// tslint:disable-next-line:typedef
getStudentCountCourseWise() { // Get All Candidate Count List Course Wise
  // tslint:disable-next-line:prefer-const
  let header = new HttpHeaders().set('Content-type', [
    'application/json',
     'Access-Control-Allow-Origin: *',
     'Access-Control-Allow-Methods: *',
     'Access-Control-Allow-Headers: *',
     'X-CSRF-TOKEN: '
  ]);
  // Student List
  // tslint:disable-next-line:prefer-const
  let options = { headers: header };
  return this.http.get(this.url + '/get-student-count-coursewise', options);
}



// Student List Details
// tslint:disable-next-line:typedef
public getTotalSudentCount(){ // Get Total Candidate Count
  // tslint:disable-next-line:prefer-const
  let header = new HttpHeaders().set('Content-type', [
    'application/json',
    'Access-Control-Allow-Origin: *',
    'Access-Control-Allow-Methods: *',
    'Access-Control-Allow-Headers: *',
     'X-CSRF-TOKEN: '

  ]);
  // tslint:disable-next-line:prefer-const
  let options = { headers: header };
  // let url: any = 'http://127.0.0.1:8000';
  return this.http.get(this.url + '/get-totalstudent-count/', options );
}

// tslint:disable-next-line:typedef
// tslint:disable-next-line:variable-name
public getSudentListCourseWise( course_code: string, status_id: number){ // Get All Candidate List Course Wise
  console.log('student course_code service:: ' + course_code + '--' + status_id );

  let header = new HttpHeaders().set('Content-type', [
    'application/json',
     'Access-Control-Allow-Origin: *',
     'Access-Control-Allow-Methods: *',
     'Access-Control-Allow-Headers: *',
     'X-CSRF-TOKEN: '
   ]);
  // tslint:disable-next-line:prefer-const
  let options = { headers: header };
  return this.http.post(this.url + '/get-student-list-coursewise/' + course_code + '/' + status_id, options);
}

// tslint:disable-next-line:typedef
// tslint:disable-next-line:variable-name
public getSudentStatusCourseWiseCount(id: number){ // Get All Candidate Status Count List Course Wise
  // console.log('getSudentStatusCourseWiseCount:: ' + id);
  return this.http.get(this.url + '/get-student-status-count-coursewise/' + id);
}


// Total Pending SudentCount Details
// tslint:disable-next-line:typedef
public getTotalPendingSudentCount(){ // Get Total Pending Candidate Count 
  // tslint:disable-next-line:prefer-const
  let header = new HttpHeaders().set('Content-type', [
    'application/json',
     'Access-Control-Allow-Origin: *',
     'Access-Control-Allow-Methods: *',
     'Access-Control-Allow-Headers: *',
     'X-CSRF-TOKEN: '

  ]);
  // tslint:disable-next-line:prefer-const
  let options = { headers: header };
  return this.http.get(this.url + '/get-student-pending-count/', options );
}

// Total Approved SudentCount Details
// tslint:disable-next-line:typedef
public getTotalApprovedSudentCount(){ // Get Total Approve Candidate Count 
  // tslint:disable-next-line:prefer-const
  let header = new HttpHeaders().set('Content-type', [
    'application/json',
     'Access-Control-Allow-Origin: *',
     'Access-Control-Allow-Methods: *',
     'Access-Control-Allow-Headers: *',
     'X-CSRF-TOKEN: '

  ]);
  // tslint:disable-next-line:prefer-const
  let options = { headers: header };

  return this.http.get(this.url + '/get-student-approved-count/', options );
}

// Total Reject SudentCount Details
// tslint:disable-next-line:typedef
public getTotalRejectSudentCount(){ // Get Total Reject Candidate Count 
  // tslint:disable-next-line:prefer-const
  let header = new HttpHeaders().set('Content-type', [
    'application/json',
     'Access-Control-Allow-Origin: *',
     'Access-Control-Allow-Methods: *',
     'Access-Control-Allow-Headers: *',
     'X-CSRF-TOKEN: '

  ]);
  // tslint:disable-next-line:prefer-const
  let options = { headers: header };

  return this.http.get(this.url + '/get-student-reject-count/', options );
}



// tslint:disable-next-line:typedef
public getSudentDetails(id: number){ // Get Candidate Details Id Wise
  // console.log('student id service:: ' + id);
  return this.http.get(this.url + '/get-student-details/' + id);
}

// Student List Qualification
// tslint:disable-next-line:typedef
public getSudentQualification(id: number){ // Get Candidate Qualification Id Wise
  // console.log('student id service:: ' + id);
  return this.http.get(this.url + '/get-student-qualification/' + id);
}


// Student Approve
// tslint:disable-next-line:typedef
public StudentApprove(msg: ApproveReject){ // Get Candidate Approve
  console.log('SudentApprove id service:: ' + msg.id);
  // tslint:disable-next-line:prefer-const
  let header = new HttpHeaders().set('Content-type', [
    'application/json',
     'Access-Control-Allow-Origin: *',
     'Access-Control-Allow-Methods: *',
     'Access-Control-Allow-Headers: *',
     'X-CSRF-TOKEN: '

  ]);
  // tslint:disable-next-line:prefer-const
  let options = { headers: header };
  return this.http.post(this.url + '/student-approved/' + msg.id, msg, options);
}

// Student Reject
// tslint:disable-next-line:typedef
public StudentReject(msg: ApproveReject){ // Get Candidate Reject
  console.log('StudentReject id service:: ' + msg.id);
  // tslint:disable-next-line:prefer-const
  let header = new HttpHeaders().set('Content-type', [
    'application/json',
     'Access-Control-Allow-Origin: *',
     'Access-Control-Allow-Methods: *',
     'Access-Control-Allow-Headers: *',
     'X-CSRF-TOKEN: '

  ]);
  // tslint:disable-next-line:prefer-const
  let options = { headers: header };
  return this.http.post(this.url + '/student-reject/' + msg.id, msg, options);
}

// Student Reject
// tslint:disable-next-line:typedef
public StudentSendAlert(msg: ApproveReject){ // Get Candidate Send Alert
  console.log('StudentSendAlert id service:: ' + msg.id);
  // tslint:disable-next-line:prefer-const
  let header = new HttpHeaders().set('Content-type', [
    'application/json',
     'Access-Control-Allow-Origin: *',
     'Access-Control-Allow-Methods: *',
     'Access-Control-Allow-Headers: *',
     'X-CSRF-TOKEN: '

  ]);
  // tslint:disable-next-line:prefer-const
  let options = { headers: header };
  return this.http.post(this.url + '/student-send-alert/' + msg.id, msg, options);
}



// tslint:disable-next-line:typedef
public getToken1(){
  this.getToken().subscribe(res => {
    this.token = res;
    console.log('Token' + this.token);
  }
    );
}

}
