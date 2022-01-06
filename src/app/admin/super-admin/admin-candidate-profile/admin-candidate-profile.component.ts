import { Component, OnInit, Input } from '@angular/core';
import { CandidateListService } from '../candidate-list.service';
import { CandidateList } from '../all-admission-request-list/candidate-list';
import { ApproveReject } from '../approve-reject';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpParams } from '@angular/common/http';
import { first } from 'rxjs/operators';
@Component({
  selector: 'app-admin-candidate-profile',
  templateUrl: './admin-candidate-profile.component.html',
  styleUrls: ['./admin-candidate-profile.component.css']
})
export class AdminCandidateProfileComponent implements OnInit {
  approverejectForm!: FormGroup;
  submitted = false;
  studentid: any;
  studentdata: any;
  studentqual: any;
  studata = new CandidateList();
  appreject = new ApproveReject();
  loading!: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private _candidateList: CandidateListService,
    public router: Router,
    private route: ActivatedRoute
  ) { }

  panelOpenState = false;
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;

  ngOnInit(): void {
    console.log('Student Id:- ' + this.route.snapshot.params.id);
    this.studentid = this.route.snapshot.params.id;

    this.approverejectForm = this.formBuilder.group({
      remarks: ['', Validators.required],
      course_code: ['', Validators.required],
    });

    this.getStudentDetails();
    this.getStudentQualification();
  }

  // tslint:disable-next-line:typedef
  getStudentDetails() {
    this.loading = true;
    // this.studentdetail.id = this.studentId;
    this._candidateList.getSudentDetails(this.studentid).subscribe(res => {
      this.loading = false;
      this.studentdata = res;
      const a = JSON.stringify(this.studentdata);
    //  console.log('Student details!!' + a);

    }, err => console.error(err),
      () => console.log('getSudentDetails completed')
    );
  }

  // tslint:disable-next-line:typedef
  getStudentQualification() {

    // this.studentdetail.id = this.studentId;
    this._candidateList.getSudentQualification(this.studentid).subscribe(res => {
      this.studentqual = res;
      const b = JSON.stringify(this.studentqual);
      // console.log('Student details b!!' + b);
    }, err => console.error(err),
      () => console.log('getSudentQual completed')
    );
  }





  // convenience getter for easy access to form fields
  // tslint:disable-next-line:typedef
  get f() { return this.approverejectForm.controls; }
  // tslint:disable-next-line:typedef
  onApprove() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.approverejectForm.invalid) {
      return;
    }
    // Initialize Params Object
    let Params = new HttpParams();
    // Begin assigning parameters
    // let st_id = this.studentid;
    Params = Params.append('remarks', this.approverejectForm.value.remarks);
    this.appreject.id = this.studentid;
    this.appreject.approve_reject_msg = this.approverejectForm.value.remarks;
    this.appreject.course_code = this.approverejectForm.value.course_code;
    // console.warn("approve " + Params);
    // console.warn("approve " + this.studentid);
    // console.warn("course_code " + this.appreject.course_code);
    this._candidateList.StudentApprove(this.appreject)
      .pipe(first())
      .subscribe(
        data => {
          alert('Candidate Approved!!');
          this.router.navigate(['/adminhome']);
         // console.log("Approved" + JSON.stringify(data));
        }, err => console.error(err),
        () => console.log('SudentApprove completed')
      );
  }

  // tslint:disable-next-line:typedef
  onReject() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.approverejectForm.invalid) {
      return;
    }
    // Initialize Params Object
    let Params = new HttpParams();
   // this.appreject.approve_reject_msg = this.approverejectForm.value.remarks;
    this.appreject.id = this.studentid;
    this.appreject.approve_reject_msg = this.approverejectForm.value.remarks;
    this._candidateList.StudentReject(this.appreject)
      .pipe(first())
      .subscribe(
        data => {
          alert('Candidate Rejected!!');
          this.router.navigate(['/adminhome']);
         // console.log("Reject" + JSON.stringify(data));
        }, err => console.error(err),
        () => console.log('StudentReject completed')
      );

  }

  // tslint:disable-next-line:typedef
  onAlertMsg() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.approverejectForm.invalid) {
      return;
    }
    // Initialize Params Object
    let Params = new HttpParams();
    // Begin assigning parameters
    // let st_id = this.studentid;
    Params = Params.append('remarks', this.approverejectForm.value.remarks);
  //  console.warn("onAlertMsg " + Params);
    this.appreject.id = this.studentid;
    this.appreject.approve_reject_msg = this.approverejectForm.value.remarks;
    this._candidateList.StudentSendAlert(this.appreject)
      .pipe(first())
      .subscribe(
        data => {
          alert('Candidate Send Notification Succesfully!!');
          this.router.navigate(['/adminhome']);
        //  console.log('onAlertMsg' + JSON.stringify(data));
        }, err => console.error(err),
        () => console.log('StudentReject completed')
      );

  }
}
