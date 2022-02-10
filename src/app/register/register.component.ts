import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  showSuccessMsg:boolean=false;
  bookSection=[{name:'Development'},{name:'Science'},{name:'Arts'},{name:'Pharmacy'},];
  profileForm = new FormGroup
  ({
  bookName: new FormControl('',Validators.compose([Validators.required,Validators.minLength(5)])),
  bookId: new FormControl('',Validators.compose([Validators.required,Validators.minLength(5)])),
  bookAuthor:new FormControl('',Validators.compose([Validators.required,Validators.minLength(5)])),
  bookPrice:new FormControl('',Validators.compose([Validators.required])),
  bookSection: new FormControl('',Validators.compose([Validators.required]))});
  
  constructor(private detailservice:DetailsService) { }
  
  ngOnInit(): void {}

  addData(booksData:any){
    this.detailservice.addDetails(booksData)
  }
  onSubmit(register:any) {
    this.showSuccessMsg=true;
    this.detailservice.addDetails(this.profileForm.value);
    setTimeout(()=>{this.showSuccessMsg=false;},2000);
    console.log(this.profileForm.value);
  }

}
