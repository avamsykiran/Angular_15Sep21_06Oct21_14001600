import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArthServiceService {

  constructor() { }

  sum(n1:number,n2:number):number{
    return n1+n2;
  }

  dif(n1:number,n2:number):number{
    return n1-n2;
  }

  prd(n1:number,n2:number):number{
    return n1*n2;
  }

  qut(n1:number,n2:number):number{
    if(n2===0)
      throw new Error("Invalid divisor");
    return n1/n2;
  }
}
