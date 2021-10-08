import { Component, OnInit } from '@angular/core';
import { TransactionsService } from 'src/app/service/transactions.service';
import { UsersService } from 'src/app/service/users.service';
import { TransactionSummary } from 'src/app/shared/models/transaction-summary';
import { User } from 'src/app/shared/models/user';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.css']
})
export class TransactionsListComponent implements OnInit {

  currentUser:User|null;
  txnSmry?:TransactionSummary;
  errMsg?:string;

  constructor(private userService:UsersService,private txnService:TransactionsService) {
    this.currentUser=this.userService.currentUser();
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    if(this.currentUser){
      this.txnService.getTxnSummaryByUserId(this.currentUser.id).subscribe(
        data => this.txnSmry=data,
        err => {console.log(err);this.errMsg="Unable to fetech data";}
      );
    }
  }

  delete(id:number){
    this.txnService.deleteById(id).subscribe(
      () => this.laodData(),
      err => {console.log(err);this.errMsg="Unable to delete data";}
    );
  }
}
