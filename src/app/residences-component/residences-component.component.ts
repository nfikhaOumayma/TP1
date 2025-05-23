import { Component, OnInit } from '@angular/core';
import { Residence } from 'src/core/models/residence';
import { ResidenceService } from '../Services/residence.service';
<<<<<<< HEAD
import { Router } from '@angular/router';
=======
>>>>>>> origin/master

@Component({
  selector: 'app-residences-component',
  templateUrl: './residences-component.component.html',
  styleUrls: ['./residences-component.component.css']
})
export class ResidencesComponentComponent implements OnInit {

<<<<<<< HEAD
  constructor( private residenceservice:ResidenceService , private router:Router) { }
=======
  constructor( private residenceservice:ResidenceService) { }
>>>>>>> origin/master
  favoriteResidences: Residence[] = [];
  listServiceResidences:Residence[]=[];
  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria", "image":"../../assets/images/R1.jpg", status: "Disponible"},
     {id:2,"name": "El yasmine", "address":"Ezzahra","image":"../../assets/images/R2.jpg", status: "Disponible" },
     {id:3,"name": "El Arij", "address":"Rades","image":"../../assets/images/R3.jpg", status: "Vendu"},
     {id:4,"name": "El Anber","address":"inconnu", "image":"../../assets/images/R4.jpg", status: "En Construction"},
     
   ];
 
  ngOnInit(): void {
    this.residenceservice.getAllResidences().subscribe((res)=>{
      this.listServiceResidences=res;
      console.log(this.listServiceResidences);
    })
  }

  showLocation(res:Residence){
    if( res.address==="inconnu"){
      alert("cette adresse est inconnue")
    }else{
      alert(`l'adresse est ${res.address}`)
    }
  }

  searchName="";

 
  addToFavorites(residence: Residence) {
    if (!this.favoriteResidences.includes(residence)) {
      this.favoriteResidences.push(residence);
      if(this.favoriteResidences.includes(residence)){
        alert(`${residence.name} `)
      }
  }
  console.log(this.favoriteResidences.length);
}

<<<<<<< HEAD
  searchAddress: string = ''; 
=======
  searchAddress: string = '';
>>>>>>> origin/master
  
   filteredResidences(): Residence[] {
    return this.listServiceResidences.filter(res =>
      res.name.toLowerCase().includes(this.searchName.toLowerCase()) &&
      res.address.toLowerCase().includes(this.searchAddress.toLowerCase())
    );
  }

  n!:number
  getCount(){
    return this.n=this.residenceservice.getNumber(this.listServiceResidences,"id",1);
    console.log(this.n);
  }

  deleteRResidence(id:number){
    this.residenceservice.deleteResidence(id).subscribe((res)=>{
    console.log(res);
    this.ngOnInit();
    })
  }

<<<<<<< HEAD
  goToUpdateResidence(id:number){
    this.router.navigate(['/update',id])
  }
=======

>>>>>>> origin/master


  
}
