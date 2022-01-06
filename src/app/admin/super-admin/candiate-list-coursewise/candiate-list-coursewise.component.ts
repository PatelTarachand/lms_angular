import { Component, OnInit } from '@angular/core';
import { CandidateListService } from '../candidate-list.service';
import { TotalStudentCount } from '../total-student-count';
import { ApproveReject } from '../approve-reject';
import { ActivatedRoute, Router } from '@angular/router';
import { __values } from 'tslib';
import { CandidateList } from '../all-admission-request-list/candidate-list';
import { CandiateStatusCoursewiseComponent } from '../candiate-status-coursewise/candiate-status-coursewise.component';
@Component({
  selector: 'app-candiate-list-coursewise',
  templateUrl: './candiate-list-coursewise.component.html',
  styleUrls: ['./candiate-list-coursewise.component.css']
})
export class CandiateListCoursewiseComponent implements OnInit {
// tslint:disable-next-line:no-any
p: number = 1;
public studentlist_coursewise: any ;
course_code: any;
 coursewise = new TotalStudentCount();
 objectKeys = Object.keys;
  loading!: boolean;
  status_id: any;
  appreject = new ApproveReject();
  constructor(
     // tslint:disable-next-line:variable-name
     private _candidateList: CandidateListService,
     public router: Router,
     private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log('course_code Id:- ' + this.route.snapshot.params.course_code);
    this.course_code = this.route.snapshot.params.course_code;
    // tslint:disable-next-line:variable-name
    const app_rej_status = sessionStorage.getItem('status_id');
    console.log('seession data status wise ' + app_rej_status);
    // this.status_id = CandiateStatusCoursewiseComponent.route.snapshot.params.status;
    // console.log('this.status_id Id:- ' + this.status_id);
    this.getStudentListCourseWise();
  }


    // tslint:disable-next-line:typedef
    getStudentListCourseWise(){
      const app_rej_status = sessionStorage.getItem('status_id');
     // console.log('seession data status wise ' + app_rej_status);
      this.status_id = app_rej_status;
      this.loading = true;
     // console.log("course_code!!!" + this.course_code);
      this._candidateList.getSudentListCourseWise(this.course_code, this.status_id).subscribe(
        res => {
          this.loading = false;
          this.studentlist_coursewise = res;
          // this.coursewise = this.studentlist_coursewise;
          const b = JSON.stringify(this.studentlist_coursewise);
        //  console.log('getStudentListCourseWise' + b);
        },
        err => console.error(err),
        () => console.log('getStudentListCourseWise completed')
  
      );
  
    }
}
