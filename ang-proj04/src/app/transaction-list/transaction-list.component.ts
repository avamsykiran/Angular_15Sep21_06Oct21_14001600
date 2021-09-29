import { Component, OnInit } from '@angular/core';
import { Transaction } from '../models/transaction';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  txns?:Transaction[];
  isLoading:boolean;
  errMsg?:string;

  constructor(private txnService:TransactionService) {
    this.isLoading=true;
  }

  ngOnInit(): void {
    this.txnService.getAll().subscribe(
      data => {this.isLoading=false; this.txns=data;},
      err => {console.log(err);this.errMsg="Sorry! Data could not be feteched!";this.isLoading=false;}
    );
  }

}
