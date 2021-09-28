import { Injectable } from '@angular/core';
import { Observer,Observable } from 'rxjs';
import {map,filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NumberSeriesService {

  constructor() { }

  generateSeries(lb:number,ub:number) : Observable<number> {

    let task = (observer:Observer<number>) => {
      if(lb>ub){
        observer.error("Invalid boundaries, series can not be generated")
        return;
      }

      let currentVal = lb;
      let handle = setInterval(()=>{
        observer.next(currentVal);
        currentVal++;
        if(currentVal>ub){
          clearInterval(handle);
          observer.complete();
        }
      },500);
    };

    return new Observable<number>(task);
  }

  generateEvenSeries(lb:number,ub:number) : Observable<number> {
    return  this.generateSeries(lb,ub).pipe(filter(v => v%2===0));
  }

  generateSquaredSeries(lb:number,ub:number) : Observable<number> {
    return  this.generateSeries(lb,ub).pipe(map(v => v*v));
  }

  generateSquareRootSeries(lb:number,ub:number) : Observable<number> {
    return  this.generateSeries(lb,ub).pipe(map(v => Math.sqrt(v)));
  }

  generateEvenSquaredSeries(lb:number,ub:number) : Observable<number> {
    return  this.generateSeries(lb,ub).pipe(filter(v => v%2===0) , map(v => v*v));
  }
}
