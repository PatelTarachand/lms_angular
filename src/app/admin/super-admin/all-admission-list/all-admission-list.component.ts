import { Component, OnInit } from '@angular/core';
import { CandidateListService } from '../candidate-list.service';
import { Courses } from '../courses';
import { Router } from '@angular/router';
import { __values } from 'tslib';
@Component({
  selector: 'app-all-admission-list',
  templateUrl: './all-admission-list.component.html',
  styleUrls: ['./all-admission-list.component.css']
})
export class AllAdmissionListComponent implements OnInit {
  // tslint:disable-next-line:no-inferrable-types
  p: number = 1;
  // tslint:disable-next-line:no-any
  public studcntcrswise: any ;
  public studstscntcrswise: any ;
  studentcntcrswise = new Courses();
  // tslint:disable-next-line:no-any
  data: any;
  statusdata: any;
  // tslint:disable-next-line:variable-name
  status_id = 1;
  objectKeys = Object.keys;
  // tslint:disable-next-line:no-inferrable-types
  loading!: any;
  constructor(
    // tslint:disable-next-line:variable-name
    private _candidateList: CandidateListService,
    public router: Router,
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.getStudentCourseWiseCount();
    this.getStudentStatusCourseWiseCount();
  }
    // tslint:disable-next-line:typedef
    getStudentCourseWiseCount(){
      this.loading = true;
      this._candidateList.getStudentCountCourseWise().subscribe(
        res => {
          this.loading = false;
           this.studcntcrswise = res;
           this.data =  this.studcntcrswise;
          // console.log('studcntcrswise' + this.data);
        },
        err => console.error(err),
        () => console.log('getStudent completed')
      );
    }

    // tslint:disable-next-line:typedef
    getStudentStatusCourseWiseCount(){
      this._candidateList.getSudentStatusCourseWiseCount(this.status_id).subscribe(
        res => {
           this.studstscntcrswise = res;
           this.statusdata =  this.studstscntcrswise;
          // console.log('studcntcrswise' + this.data);
        },
        err => console.error(err),
        () => console.log('getStudent completed')
      );
    }
 
}
