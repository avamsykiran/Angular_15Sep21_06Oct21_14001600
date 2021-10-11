import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'intoWords'
})
export class IntoWordsPipe implements PipeTransform {

  words:string[];

  constructor(){
    this.words= [
      "ZERO","ONE","TWO","THREE","FOUR","FIVE","SIX","SEVEN","EIGHT","NINE"
    ];
  }

  transform(value: number): string {
    let result ="";

    let strValue = `${value}`;

    for(let i=0;i<strValue.length;i++){
      let digit = parseInt(strValue.charAt(i));
      result += this.words[digit] +" ";
    }
    
    return result.trim();
  }

}
