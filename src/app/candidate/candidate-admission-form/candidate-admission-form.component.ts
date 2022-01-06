import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';
import { AdmissionFormService } from '../admission-form.service';
import { AdmissionFormData } from './AdmissionFormData';
import { PreviewFormService } from '../preview-form.service';
import { Router } from '@angular/router';
import { Countries } from './Countries';
import { States } from './States';
import { CaptchaService } from '../captcha.service';

@Component({
  selector: 'app-candidate-admission-form',
  templateUrl: './candidate-admission-form.component.html',
  styleUrls: ['./candidate-admission-form.component.css'],
  providers: [AdmissionFormService],
})
export class CandidateAdmissionFormComponent implements OnInit {
  public days: any[] = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
  ];
  public years: any[] = [];
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
  public countries: any;
  public states: any;
  public districts: any;

  public courses: any;
  /*[] = [
    { courseName: 'Course 101' },
    { courseName: 'Course 102' },
    { courseName: 'Course 103' },
    { courseName: 'Course 104 ' },
  ];*/

  public genders: any[] = [
    { id: 'm', name: 'Male' },
    { id: 'f', name: 'Female' },
    { id: 'o', name: 'Other' },
  ];
  public qualifications: any[] = [
    // { id: 0, name: 'Please Select Your Qualification ' },
    { id: '10', name: '10TH' },
    { id: '12', name: '12TH' },
  ];
  public catagories: any[] = [
   // { id: 0, name: 'Please Select Category' },
    { id: '1', name: 'General' },
    { id: '2', name: 'SC' },
    { id: '3', name: 'ST' },
    { id: '4', name: 'OBC' },
  ];
  selectedCategory = 'Please Select Category';
  public firstName: string = '';
  public lastName: string = '';
  public fatherName: string = '';
  public motherName: string = '';
  public mobileNumber: string = '';
  public emailId: string = '';
  public aadharNumber: string = '';
  public addressLocal: string = '';
  public pinCode: string = '';
  public boardName: string = '';
  public passedYear: string = '';
  public marks: string = '';
  public cgpa: string = '';
  public waNumber: string = '';
  public twitterId: string = '';
  public fbId: string = '';
  public instaId: string = '';
  admissionForm!: FormGroup;
  submitted = false;
  selectCourse: any;
  selectYear: string = '';
  selectMonth: string = '';
  selectDay: string = '';
  selectGender: any;
  selectCategory: any;
  selectCountry: any;
  selectState: any;
  selectDistrict: any;
  selectQualification: any;
  categoryFile!: File;
  aadharFile!: File;
  candidatePhoto!: File;
  marksheetFile10!: File;
  marksheetFile12!: File;
  public previewDisplay: boolean = false;
  formDisplay: boolean = true;
  formData!: Observable<AdmissionFormData>;
  country = new Countries();
  state = new States();
  captchaText!: String;
  capImage: any;
  //  constructor(private builder:FormBuilder) {

  //   }
  constructor(
    private _admissionFormService: AdmissionFormService,
    private _previewFormSource: PreviewFormService,
    public router: Router,
    private _validateCaptcha: CaptchaService
  ) {
    this.yearGenerator();
  }
  ngOnInit(): void {
    //this.hello();
    this.getCountryList();
    this.getCourseList();
    this.generateCaptcha();
    this.admissionForm = new FormGroup({
      firstName: new FormControl(
        '',
        Validators.compose([
          //
          Validators.max(25),
          Validators.minLength(2),
          Validators.maxLength(25),
        ])
      ),
      lastName: new FormControl(
        '',
        Validators.compose([
          Validators.minLength(2),
          Validators.maxLength(25),
          Validators.pattern("^[a-zA-Z -']+"),
        ])
      ),
      fatherName: new FormControl('', [
        Validators.minLength(2),
        Validators.maxLength(50),
      ]),
      motherName: new FormControl('', [
        Validators.minLength(2),
        Validators.maxLength(50),
      ]),
      mobileNumber: new FormControl('', [
        Validators.minLength(10),
        Validators.maxLength(10),
        Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
      ]),
      emailId: new FormControl('', [Validators.email]),
      aadharNumber: new FormControl('', [
        Validators.minLength(12),
        Validators.maxLength(12),
      ]),
      addressLine: new FormControl('', [Validators.maxLength(100)]),
      pinCode: new FormControl('', [
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
      waNumber: new FormControl('', [
        Validators.minLength(10),
        Validators.maxLength(10),
      ]),
      twitterId: new FormControl('', [Validators.maxLength(255)]),
      fbId: new FormControl('', [Validators.maxLength(255)]),
      instaId: new FormControl('', [Validators.maxLength(255)]),
      selectCourse: new FormControl(null),
      selectYear: new FormControl(null),
      selectMonth: new FormControl(null),
      selectDay: new FormControl(null),
      selectGender: new FormControl(null),
      // selectCategory: new FormControl(null),
      selectCountry: new FormControl(null),
      selectState: new FormControl(null),
      selectDistrict: new FormControl(null),
      selectQualification: new FormControl(null),
      // categoryFile: new FormControl(null),
      selectCategory: new FormControl(null, Validators.required),
      categoryFile: new FormControl({ value: '', disabled: false }, [
        Validators.required
      ]),
      aadharFile: new FormControl(null),
      candidatePhoto: new FormControl(null),
      marksheetFile10: new FormControl(null),
      marksheetFile12: new FormControl(null),
      captchaText: new FormControl('', [Validators.required]),
    });
    this.onSelectionCategoryChanged(0);
  }

  get f() {
    return this.admissionForm.controls;
  }
  onSubmit(admissionForm: FormGroup) {
    // this.firstName = admissionForm.get('firstName')?.value;
    // this.mobileNumber = admissionForm.get('mobileNumber')?.value;
    // this.selectCourse = admissionForm.get('selectCourse')?.value;
    this.captchaText = this.admissionForm.get('captchaText')?.value;
    let formData = admissionForm.value;

    let form = new FormData();
    form.append('candidatePhoto', this.photo);
    form.append('categoryFile', this.cFile);
    form.append('aadharFile', this.adharFile);
    form.append('marksheetFile10', this.m10File);
    form.append('marksheetFile12', this.m12File);
    form.append('formData', JSON.stringify(formData));
    //form.append('firstName',admissionForm.get('firstName')?.value);
    //this.validateCaptcha();
    if (this.validcap(this.captchaText) == true) {
      
      this.saveData(form);
      this.previewData(formData);
      this.router.navigate(['/previewForm']);
    }else{
      
    }
    this._admissionFormService.changeMessage(formData);
  }
  photo: any;

  getPhoto(e: any) {
    this.photo = e.target.files[0];
    // console.log(e.target.files[0]);
  }


 // tslint:disable-next-line:member-ordering
 categoryDisabed = true;
  // tslint:disable-next-line:typedef
  onSelectionCategoryChanged(e: any) {
    this.admissionForm.get('selectCategory')?.valueChanges.subscribe(selectedCategory => {
      if (selectedCategory === '1') {
        this.admissionForm.get('categoryFile')?.disable();
    }
    else {
        this.admissionForm.get('categoryFile')?.enable();
    }
    });
  }

  adharFile: any;
  getaAadharFile(e: any) {
    this.adharFile = e.target.files[0];
    // console.log(e.target.files[0]);
  }
  cFile: any;
  m10File: any;
  m12File: any;
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
  saveData(formData: FormData) {
    // this._admissionFormService.saveDataToService(formData);
    console.log('form submit');
    this._admissionFormService.register(formData).subscribe(
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
  previewData(formData: AdmissionFormData) {
    console.log("preview form data "+formData.fatherName);
    
    this._previewFormSource.sendData(formData);
  }

  yearGenerator() {
    let year = new Date().getFullYear();
    let range = [];
    for (let i = year; i > 1949; i--) {
      range.push(i);
    }
    this.years = range;
  }
  preview() {
    // this.formDisplay=true;
    // this.previewDisplay=true;
    //this.router.navigate(['/previewForm']);
  }

  getCourseList() {
    this._admissionFormService.getCourse().subscribe(
      (res) => {
        this.courses = res;
        // console.log(this.courses);
        //console.log(res);
      },
      (err) => console.error(err),
      () => console.log('getCourse completed')
    );
  }

  getCountryList() {
    this._admissionFormService.getCountry().subscribe(
      (res) => {
        // console.log(res['countries'][0].name);

        //  alert(res);
        // this.countries=res;
        this.countries = res;
        console.log(this.countries);
      },
      (err) => console.error(err),
      () => console.log('getCountry completed')
    );
  }
  getStateList(countryId: any) {
    this.country.country_id = countryId;
    this._admissionFormService.getState(this.country.country_id).subscribe(
      (res) => {
        this.states = res;
      },
      (err) => console.error(err),
      () => console.log('getState completed')
    );
  }
  getCitiesList(stateId: any) {
    this.state.state_id = stateId;
    this._admissionFormService.getCities(this.state.state_id).subscribe(
      (res) => {
        console.log(res);

        this.districts = res;
      },
      (err) => console.log(err),
      () => console.log('getCities completed')
    );
  }
  list: any[]=[];
  qualificationList: any={};
  valJson:any;
  objectKeys = Object.keys;
  addQualification(){
    let qualification= "qualification";
    let boardName= "boardName";
    let passedYear= "passedYear";
    let marks = "marks";
    let cgpa = "cgpa";

    this.qualificationList[qualification]=this.admissionForm.get('selectQualification')?.value;
    this.qualificationList[boardName]=this.admissionForm.get('boardName')?.value;
    this.qualificationList[passedYear]=this.admissionForm.get('boardPassingYear')?.value;
    this.qualificationList[marks]=this.admissionForm.get('marks')?.value;
    this.qualificationList[cgpa]=this.admissionForm.get('cgpa')?.value;
    this.list.push(this.qualificationList); 
   // let obj=JSON.stringify(this.list);
   // this.valJson=JSON.parse(obj);
   // let suc= (this.valJson || {}).qualification; 
    console.log(Object.keys(this.list).length);
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
