import { Injectable } from '@angular/core';
import {Account} from './models/accountsformat';
@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  books:Account[]=[];
  addDetails(booksData: any) {
    this.books.push(booksData);
  }
  getDetails(){
    return this.books;
  }
  constructor() { }
}
