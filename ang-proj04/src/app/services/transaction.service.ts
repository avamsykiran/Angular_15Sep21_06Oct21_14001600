import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from '../models/transaction';

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
