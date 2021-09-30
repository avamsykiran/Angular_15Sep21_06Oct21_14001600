import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Transaction } from '../models/transaction';
import { TransactionSummary } from '../models/transaction-summary';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  txnApiUrl:string;

  constructor(private http:HttpClient) {
    this.txnApiUrl="http://localhost:9999/txns";
  }

  getAll():Observable<Transaction[]>{
    return this.http.get<Transaction[]>(this.txnApiUrl);
  } 
  
  getTxnSummary():Observable<TransactionSummary>{
    return this.http.get<Transaction[]>(this.txnApiUrl).pipe(
      map(txns => {

        let totalCredit = txns.filter(t=>t.type==='CREDIT').map(t=>t.amount).reduce((a1,a2)=>a1+a2);
        let totalDebit = txns.filter(t=>t.type==='DEBIT').map(t=>t.amount).reduce((a1,a2)=>a1+a2);
        let balance = totalCredit-totalDebit;

        return { txns, totalCredit, totalDebit, balance };
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
