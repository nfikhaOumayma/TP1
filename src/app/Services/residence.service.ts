import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Residence } from 'src/core/models/residence';

@Injectable({
  providedIn: 'root'
})
export class ResidenceService {

  constructor(private http:HttpClient) { }

  getNumber(list:any,crt:any,value:any){
    let n = 0
    for(let i in list){
      if(list[i][crt]==value){
        n++
      }
    }
    return n;
  }

  getAllResidences():Observable<Residence[]>{
    return this.http.get<Residence[]>('http://localhost:3000/residence')
  }

  getResidenceById(id:number):Observable<Residence>{
    return this.http.get<Residence>(`http://localhost:3000/residence/${id}`)
  }

  addResidence(residence: Residence):Observable<Residence>{
    return this.http.post<Residence>('http://localhost:3000/residence', residence)
  }
  updateResidence(residence: Residence):Observable<Residence>{
    return this.http.put<Residence>(`http://localhost:3000/residence/${residence.id}`, residence)
  } 
  deleteResidence(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/residence/${id}`);
  }

}
