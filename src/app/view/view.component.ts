import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DetailsService } from '../details.service';
import { Account } from '../models/accountsformat';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  books!:Account[];
  expandDetailsOfThis:number=-1;
  expandDetailsVar:boolean=false;
  editEnabled:boolean=false;
  showSuccessMsg:boolean=false;
  bookSection=[{name:'Development'},{name:'Science'},{name:'Arts'},{name:'Pharmacy'},];
  profileForm = new FormGroup({bookName: new FormControl(''),bookId: new FormControl(''),bookSection: new FormControl(''),bookAuthor:new FormControl(''),bookPrice:new FormControl('')});


  constructor(private detailsService:DetailsService) {

   }
  ngOnInit(): void {
    this.books=this.detailsService.getDetails();    
  }

  expandDetails(id:number){
    this.expandDetailsOfThis=id;
    this.expandDetailsVar=true;
    this.editEnabled=false;
  }
  // changeBtnCssProps(expandBtn:any){
  //   console.log("expand details ");
  //   console.log(expandBtn.target.style);
  //   expandBtn.target.style={
  //                           backgroundColor:"rgba(68, 68, 253, 0.925)",
  //                           color:"white"
  //                          };
  //   console.log("checkout this"+expandBtn.target.style.backgroundColor)
  // }
  editThisbook(){
    this.editEnabled=true;
    this.expandDetailsVar=false;
  }
  updateThisbook(update:any){
    console.log(update.value)
    this.books[this.expandDetailsOfThis]=update.value;
    this.showSuccessMsg=true;
    setTimeout(()=>{this.showSuccessMsg=false;},1000);
  }
}