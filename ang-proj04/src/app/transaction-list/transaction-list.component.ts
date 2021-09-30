import { Component, OnInit } from '@angular/core';
import { Transaction } from '../models/transaction';
import { TransactionSummary } from '../models/transaction-summary';
import { TransactionService } from '../services/transaction.service';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css']
})
export class TransactionListComponent implements OnInit {

  txnSmry?:TransactionSummary;
  isLoading:boolean;
  errMsg?:string;

  constructor(private txnService:TransactionService) {
    this.isLoading=true;
  }

  loadData(){
    this.txnService.getTxnSummary().subscribe(
      data => {this.isLoading=false; this.txnSmry=data;},
      err => {console.log(err);this.errMsg="Sorry! Data could not be feteched!";this.isLoading=false;}
    );
  }

  ngOnInit(): void {
    this.loadData();
  }

  delete(id:number){
    this.txnService.deleteById(id).subscribe(
      () => this.loadData(),
      err => {console.log(err);this.errMsg="Sorry! Data could not be deleted!"}
    );
  }
}
