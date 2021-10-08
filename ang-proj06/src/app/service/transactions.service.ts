import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Transaction } from '../shared/models/transaction';
import { TransactionSummary } from '../shared/models/transaction-summary';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  txnApiUrl:string;

  constructor(private http:HttpClient) {
    this.txnApiUrl=environment.txnsApiUrl;
  }

  getAllByUserId(uid:number):Observable<Transaction[]>{
    return this.http.get<Transaction[]>(`${this.txnApiUrl}?userId=${uid}`);
  } 
  
  getTxnSummaryByUserId(uid:number):Observable<TransactionSummary>{
    return this.http.get<Transaction[]>(`${this.txnApiUrl}?userId=${uid}`).pipe(
      map(txns => {

        let totalCredit = 0;
        let totalDebit = 0;
        let balance = 0;

        if(txns && txns.length>0){
          let allCredits = txns.filter(t=>t.type==='CREDIT');
          if(allCredits && allCredits.length>0)
            totalCredit = allCredits.map(t=>t.amount).reduce((a1,a2)=>a1+a2);
          
          let allDebits = txns.filter(t=>t.type==='DEBIT');
          if(allDebits && allDebits.length>0)
            totalDebit = allDebits.map(t=>t.amount).reduce((a1,a2)=>a1+a2);
            
          balance = totalCredit-totalDebit;
        }
        
        return { txns, totalCredit, totalDebit, balance,userId:uid };
      })
    );
  }

  getById(id:number):Observable<Transaction>{
    return this.http.get<Transaction>(`${this.txnApiUrl}/${id}`);
  }
  
  deleteById(id:number):Observable<void>{
    return this.http.delete<void>(`${this.txnApiUrl}/${id}`);
  }

  add(txn:Transaction):Observable<Transaction>{
    return this.http.post<Transaction>(this.txnApiUrl,txn);
  }

  modify(txn:Transaction):Observable<Transaction>{
    return this.http.put<Transaction>(`${this.txnApiUrl}/${txn.id}`,txn);
  }

}
