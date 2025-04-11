import { Component, OnInit } from '@angular/core';
import { Residence } from 'src/core/models/residence';

@Component({
  selector: 'app-residences-component',
  templateUrl: './residences-component.component.html',
  styleUrls: ['./residences-component.component.css']
})
export class ResidencesComponentComponent implements OnInit {

  constructor() { }
  favoriteResidences: Residence[] = [];

  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria", "image":"../../assets/images/R1.jpg", status: "Disponible"},
     {id:2,"name": "El yasmine", "address":"Ezzahra","image":"../../assets/images/R2.jpg", status: "Disponible" },
     {id:3,"name": "El Arij", "address":"Rades","image":"../../assets/images/R3.jpg", status: "Vendu"},
     {id:4,"name": "El Anber","address":"inconnu", "image":"../../assets/images/R4.jpg", status: "En Construction"},
     
   ];
 
  ngOnInit(): void {
  }

  showLocation(res:Residence){
    if( res.address==="inconnu"){
      alert("cette adresse est inconnue")
    }else{
      alert(`l'adresse est ${res.address}`)
    }
  }

  searchName="";

  // searchByName(){
  //   return this.listResidences.filter(r=>r.name.toLowerCase().includes(this.searchName.toLowerCase()))
  // }

  addToFavorites(residence: Residence) {
    if (!this.favoriteResidences.includes(residence)) {
      this.favoriteResidences.push(residence);
      if(this.favoriteResidences.includes(residence)){
        alert(`${residence.name} `)
      }
  }
  console.log(this.favoriteResidences.length);
}

  searchAddress: string = '';
  
   filteredResidences(): Residence[] {
    return this.listResidences.filter(res =>
      res.name.toLowerCase().includes(this.searchName.toLowerCase()) &&
      res.address.toLowerCase().includes(this.searchAddress.toLowerCase())
    );
  }
  


}
