import { formatDate } from '@angular/common';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { async } from 'rxjs/internal/scheduler/async';
import { AdmissionFormData } from '../candidate-admission-form/AdmissionFormData';
import { CandidateProfileDetailsService } from '../candidate-profile-details.service';
import { Candidate } from './Candidate';
import { CandidateInterface } from './CandidateInterface';

@Component({
  selector: 'app-candidate-profile-details',
  templateUrl: './candidate-profile-details.component.html',
  styleUrls: ['./candidate-profile-details.component.css'],
})
export class CandidateProfileDetailsComponent implements OnInit {
  myGroup!: FormGroup;
  years: any[] = [];
  photo!: string | Blob;
  cFile!: string | Blob;
  adharFile!: string | Blob;
  m10File!: string | Blob;
  m12File!: string | Blob;

  constructor(private _candidateService: CandidateProfileDetailsService) {}
  panelOpenState = false;
  checked = false;
  indeterminate = false;
  labelPosition: 'before' | 'after' = 'after';
  disabled = false;
  editDetails!: FormGroup;
  public data1: any;
  first_name: any;
  countries: any;
  states: any;
  cities: any;
  candidate = new Candidate();
  ngOnInit(): void {
    this.myGroup = new FormGroup({
      id: new FormControl(),
      first_name: new FormControl(
        {value: '', disabled: true},
        Validators.compose([
          //
          Validators.max(25),
          Validators.minLength(2),
          Validators.maxLength(25),
        ])
      ),
      last_name: new FormControl(
        {value: '', disabled: true},
        Validators.compose([
          Validators.minLength(2),
          Validators.maxLength(25),
          Validators.pattern("^[a-zA-Z -']+"),
        ])
      ),
      father_name: new FormControl({value: '', disabled: true}, [
        Validators.minLength(2),
        Validators.maxLength(50),
      ]),
      mother_name: new FormControl({value: '', disabled: true}, [
        Validators.minLength(2),
        Validators.maxLength(50),
      ]),
      mobile_no: new FormControl({value: '', disabled: true}, [
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
      ]),
      email: new FormControl({value: '', disabled: true}, [Validators.email]),
      aadhar_no: new FormControl({value: '', disabled: true}, [
        Validators.minLength(12),
        Validators.maxLength(12),
      ]),
      correspondence_address: new FormControl({value: '', disabled: true}, [Validators.maxLength(100)]),
      correspondence_pin: new FormControl({value: '', disabled: true}, [
        Validators.minLength(6),
        Validators.maxLength(6),
      ]),
      boardName: new FormControl('', [
        Validators.minLength(2),
        Validators.maxLength(100),
      ]),
      boardPassingYear: new FormControl('', [
        Validators.minLength(4),
        Validators.maxLength(4),
      ]),
      marks: new FormControl('', [
        Validators.minLength(2),
        Validators.maxLength(2),
      ]),
      cgpa: new FormControl('', [
        Validators.minLength(1),
        Validators.maxLength(3),
      ]),
      whatsapp_no: new FormControl({value: '', disabled: true}, [
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      twitter_id: new FormControl({value: '', disabled: true}, [Validators.maxLength(255)]),
      facebook_id: new FormControl({value: '', disabled: true}, [Validators.maxLength(255)]),
      instagram_id: new FormControl({value: '', disabled: true}, [Validators.maxLength(255)]),
      course_name: new FormControl({value: '', disabled: true}),
      year: new FormControl({value: '', disabled: true}),
      month: new FormControl({value: '', disabled: true}),
      day: new FormControl({value: '', disabled: true}),
      gender: new FormControl({value: '', disabled: true}),
      category: new FormControl({value: '', disabled: true}),
      correspondence_country: new FormControl({value: '', disabled: true}),
      correspondence_state: new FormControl({value: '', disabled: true}),
      correspondence_city: new FormControl({value: '', disabled: true}),
       selectQualification: new FormControl(null),
       categoryFile: new FormControl(null),
       aadharFile: new FormControl(null),
       candidatePhoto: new FormControl(null),
       marksheetFile10: new FormControl(null),
       marksheetFile12: new FormControl(null),
       captchaText: new FormControl('', [Validators.required]),
    });
    this.generateCaptcha();
    this.getCandidateDetails();
    this.getCourseDetails();
    this.yearGenerator();
    // this.first_name=this.candidate.first_name;

    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth();
    // let day = date.getDay();
    this.days = this.getDays(month, year);
    
  }
  days: any;
  onSubmit(myGroup: FormGroup) {
    this.captchaText = this.myGroup.get('captchaText')?.value;
    console.log(myGroup.value);
    let formData = myGroup.value;

    let form = new FormData();
    form.append('candidatePhoto', this.photo);
    form.append('categoryFile', this.cFile);
    form.append('aadharFile', this.adharFile);
    form.append('marksheetFile10', this.m10File);
    form.append('marksheetFile12', this.m12File);
    form.append('formData', JSON.stringify(formData));
    if (this.validcap(this.captchaText) == true) {
      
      this.updateData(form);
      // this.previewData(formData);
      // this.router.navigate(['/previewForm']);
      console.log("captcha Validate");
      
    }else{
      console.log("captcha not Validate");
    }
  }
  updateData(form: FormData) {
    console.log('form submit');
    this._candidateService.update(form).subscribe(
      (res) => {
        console.log(res);
      },
      (err) => {
        console.log(err);
      },
      () => {
        console.log('complete');
      }
    );
  }

  getPhoto(e: any) {
    this.photo = e.target.files[0];
     console.log(e.target.files[0]);
  }
  getaAadharFile(e: any) {
    this.adharFile = e.target.files[0];
     console.log(e.target.files[0]);
  }
  getaCategoryFile(e: any) {
    this.cFile = e.target.files[0];
    console.log(e.target.files[0]);
  }
  getmarksheet10File(e: any) {
    this.m10File = e.target.files[0];
    console.log(e.target.files[0]);
  }
  getaMarksheet12File(e: any) {
    this.m12File = e.target.files[0];
    console.log(e.target.files[0]);
  }

  selectedCourse: any;
  selectedYear: any;
  selectedMonth: any;
  selectedDay: any;
  //year!: any;
  courses: any;
  selectedGender: any;
  selectedCategory: any;
  selectedCountry: any;
  selectedState: any;
  selectedCity: any;
  captchaText!: String;
  capImage: any;
  getCandidateDetails() {
    let data2: any;
    this._candidateService.getCandidateDetails(1).subscribe(
      (res: Candidate[]) => {
        this.editCandidate(res[0]);

        console.log(res[0].first_name);
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('complete');
      }
    );
  }
  editCandidate(candidate: Candidate) {
    console.log(candidate);
    this.candidate = candidate;
    //this.year = candidate.dob;

    console.log(this.candidate.first_name);

    this.myGroup.patchValue(this.candidate);

    // Course list with selected Value
    this.selectedCourse = candidate.course_name;
    // this.myGroup.patchValue({ course_name: candidate.course_name });

    //Dob with selected value

    let s = candidate.dob.split('-');

    this.selectedDay = Number(s[2]);
    this.selectedMonth = Number(s[1]);
    this.selectedYear = Number(s[0]);
    // this.myGroup.patchValue({ day: this.selectedDay, month: this.selectedMonth, year:this.selectedYear});
    // console.log("split   "+s[0]+" "+s[1]+" "+s[2]);
    // console.log(this.selectedYear);

    //Selected Gender
    this.selectedGender = candidate.gender;
    console.log(this.selectedGender);
    //Selected Category
    this.selectedCategory = candidate.category;

    //selected Address
    this.getCountryList();
    this.getStateList(candidate.correspondence_country);
    this.getCitiesList(candidate.correspondence_state);

    this.selectedCountry = Number(candidate.correspondence_country);
    this.selectedState = Number(candidate.correspondence_state);
    this.selectedCity = Number(candidate.correspondence_city);
    console.log(this.selectedCountry);
    console.log(this.selectedState);
    console.log(this.selectedCity);
    this.myGroup.patchValue({
      course_name: candidate.course_name,
      day: this.selectedDay,
      month: this.selectedMonth,
      year: this.selectedYear,
      correspondence_country: this.selectedCountry,
      correspondence_state: this.selectedState,
      correspondence_city: this.selectedCity,
    });
  }

  getCourseDetails() {
    this._candidateService.getCourses().subscribe(
      (res: any) => {
        // console.log(res);
        this.courses = res;
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('complete');
      }
    );
  }

  getCountryList() {
    this._candidateService.getCountry().subscribe(
      (res) => {
        this.countries = res;
        // console.log(this.countries);
      },
      (err) => console.error(err),
      () => console.log('getCountry completed')
    );
  }
  getStateList(countryId: any) {
    this._candidateService.getState(countryId).subscribe(
      (res) => {
        this.states = res;
      },
      (err) => console.error(err),
      () => console.log('getState completed')
    );
  }
  getCitiesList(stateId: any) {
    this._candidateService.getCities(stateId).subscribe(
      (res) => {
        //  console.log(res);

        this.cities = res;
      },
      (err) => console.log(err),
      () => console.log('getCities completed')
    );
  }

  getDays(month: number, year: number) {
    let date = new Date(Date.UTC(year, month, 1));
    let days: any = [];
    while (date.getUTCMonth() === month) {
      days.push({ id: date.getUTCDate(), day: date.getUTCDate() });
      date.setUTCDate(date.getUTCDate() + 1);
    }

    return days;
  }
  yearGenerator() {
    let year = new Date().getFullYear();
    let range = [];
    for (let i = year; i > 1949; i--) {
      range.push({ id: i, year: i });
    }
    this.years = range;
    // console.log(this.years);
  }
  public months: any[] = [
    { id: 1, month: 'January' },
    { id: 2, month: 'February' },
    { id: 3, month: 'March' },
    { id: 4, month: 'April' },
    { id: 5, month: 'May' },
    { id: 6, month: 'June' },
    { id: 7, month: 'July' },
    { id: 8, month: 'August' },
    { id: 9, month: 'September' },
    { id: 10, month: 'October' },
    { id: 11, month: 'November' },
    { id: 12, month: 'December' },
  ];
  public genders: any[] = [
    { id: 'M', name: 'Male' },
    { id: 'F', name: 'Female' },
    { id: 'O', name: 'Other' },
  ];
  public qualifications: any[] = [
    { id: 0, name: 'Please Select Your Qualification ' },
    { id: '10', name: '10TH' },
    { id: '12', name: '12TH' },
  ];
  public catagories: any[] = [
    { id: '', name: 'Please Select Category' },
    { id: 'GEN', name: 'General' },
    { id: 'SC', name: 'SC' },
    { id: 'ST', name: 'ST' },
    { id: 'OBC', name: 'OBC' },
  ];
  isDisplay:boolean=true;
  editEnable(){
    this.myGroup.enable(); 
    this.isDisplay=false; 
  }
  editCancel(){
    this.myGroup.disable(); 
    this.isDisplay=true; 
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
