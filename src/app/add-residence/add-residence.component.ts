import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent implements OnInit {

  formadd!:FormGroup

  ngOnInit(): void {
    this.formadd = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern(/^[1-9][0-9]*$/)]),
      name: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      address: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(/^[A-Z][a-z].*/)]),
      image: new FormControl('', Validators.required),
      status: new FormControl('', [Validators.required, Validators.pattern(/^disponible$/)]),
    });
  
    this.formadd.valueChanges.subscribe(value => {
      console.log('Form Value:', value);
      console.log('Form Valid:', this.formadd.valid);
    });
  }

  get id(){return this.formadd.get('id')}

  addresidence(){
    console.log('notre residence : '+JSON.stringify(this.formadd.value))
  }

}