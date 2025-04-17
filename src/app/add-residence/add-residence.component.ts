import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { FormControl, FormGroup, Validators } from '@angular/forms';
=======
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
>>>>>>> origin/master
import { ResidenceService } from '../Services/residence.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent implements OnInit {

<<<<<<< HEAD
  formadd!:FormGroup
  constructor(private serviceResidence:ResidenceService, private router:Router) { }
  ngOnInit(): void {
    this.formadd = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern(/^[1-9][0-9]*$/)]),
      name: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      address: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(/^[A-Z][a-z].*/)]),
      image: new FormControl('', Validators.required),
      status: new FormControl('', [Validators.required, Validators.pattern(/^disponible$/)]),
=======
  formadd!:UntypedFormGroup
  constructor(private serviceResidence:ResidenceService, private router:Router) { }
  ngOnInit(): void {
    this.formadd = new UntypedFormGroup({
      id: new UntypedFormControl('', [Validators.required, Validators.pattern(/^[1-9][0-9]*$/)]),
      name: new UntypedFormControl('', [Validators.required, Validators.maxLength(10)]),
      address: new UntypedFormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(/^[A-Z][a-z].*/)]),
      image: new UntypedFormControl('', Validators.required),
      status: new UntypedFormControl('', [Validators.required, Validators.pattern(/^disponible$/)]),
>>>>>>> origin/master
    });
  
    this.formadd.valueChanges.subscribe(value => {
      console.log('Form Value:', value);
      console.log('Form Valid:', this.formadd.valid);
    });
  }

<<<<<<< HEAD
=======
  get id(){return this.formadd.get('id')}
>>>>>>> origin/master

  addresidence(){
  this.serviceResidence.addResidence(this.formadd.value).subscribe((res)=>{
    console.log(res);
    alert("residence added")
    this.formadd.reset();
<<<<<<< HEAD
    this.router.navigate(['/residences']);
=======
  this.router.navigate(['/residences']);
>>>>>>> origin/master
  }) 
  }

}