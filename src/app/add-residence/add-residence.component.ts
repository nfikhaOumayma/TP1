import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent implements OnInit {

  formadd!:UntypedFormGroup

  ngOnInit(): void {
    this.formadd = new UntypedFormGroup({
      id: new UntypedFormControl('', [Validators.required, Validators.pattern(/^[1-9][0-9]*$/)]),
      name: new UntypedFormControl('', [Validators.required, Validators.maxLength(10)]),
      address: new UntypedFormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(/^[A-Z][a-z].*/)]),
      image: new UntypedFormControl('', Validators.required),
      status: new UntypedFormControl('', [Validators.required, Validators.pattern(/^disponible$/)]),
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