import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

  constructor() { }

  getNumber(list:any,crt:any,value:any){
    let n = 0
    for(let i in list){
      if(list[i][crt]==value){
        n++
      }
    }
    return n;
  }
}
