import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidateListService } from './candidate-list.service';
import {TotalStudentCount} from './total-student-count';
import { __values } from 'tslib';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-super-admin',
  templateUrl: './super-admin.component.html',
  styleUrls: ['./super-admin.component.css'],
  providers: [CandidateListService],
})
export class SuperAdminComponent implements OnInit {
  loading!: boolean;
  constructor(
    // tslint:disable-next-line:variable-name
    private _totalstudentService: CandidateListService,
    public router: Router
  ) { }
  // tslint:disable-next-line:variable-name
 public totalstudent_count: any;
 public approved_count: any;
 public reject_count: any;
 public pending_count: any;
 
  totalstudcount = new TotalStudentCount() ;
  totalapprvstudcount = new TotalStudentCount() ;
  totalrejectstudcount = new TotalStudentCount() ;
  totalpendingstudcount = new TotalStudentCount() ;

  objectKeys = Object.keys;

  ngOnInit(): void {
    this.getTotalStudCount();
    this.getTotalPendingStudCount();
    this.getTotalApprovedStudCount();
    this.getTotalRejectStudCount();
  }
  // tslint:disable-next-line:typedef
  getTotalStudCount(){
    this.loading = true;
    this._totalstudentService.getTotalSudentCount().subscribe(
      res => {
        // this.objectKeys = res;
        this.loading = false;
         this.totalstudent_count = res;
         this.totalstudcount = this.totalstudent_count;
        // console.log('Student details object!!' + this.totalstudcount);
        //  const b = JSON.stringify(res);
        //  console.log('Student details b!!' + b);

      },
      err => console.error(err),
      () => console.log('getTotalStudCount completed')

    );

  }

    // tslint:disable-next-line:typedef
    getTotalPendingStudCount(){
      this._totalstudentService.getTotalPendingSudentCount().subscribe(
        res => {
          // this.objectKeys = res;
           this.pending_count = res;
           this.totalpendingstudcount = this.pending_count;
           // console.log('Student details approved_count!!' + this.totalapprvstudcount);
          //  const b = JSON.stringify(res);
          //  console.log('Student details b!!' + b);
        },
        err => console.error(err),
        () => console.log('getTotalPendingStudCount completed')
      );
   }

  // tslint:disable-next-line:typedef
  getTotalApprovedStudCount(){
    this._totalstudentService.getTotalApprovedSudentCount().subscribe(
      res => {
        // this.objectKeys = res;
         this.approved_count = res;
         this.totalapprvstudcount = this.approved_count;
         // console.log('Student details approved_count!!' + this.totalapprvstudcount);
        //  const b = JSON.stringify(res);
        //  console.log('Student details b!!' + b);

      },
      err => console.error(err),
      () => console.log('getTotalApprovedStudCount completed')

    );

  }

    // tslint:disable-next-line:typedef
    getTotalRejectStudCount(){
      this._totalstudentService.getTotalRejectSudentCount().subscribe(
        res => {
          // his.objectKeys = res;
           this.reject_count = res;
           this.totalrejectstudcount = this.reject_count;
           // console.log('Student details approved_count!!' + this.totalapprvstudcount);
          //  const b = JSON.stringify(res);
          //  console.log('Student details b!!' + b);
        },
        err => console.error(err),
        () => console.log('getTotalRejectStudCount completed')
      );
    }
}
