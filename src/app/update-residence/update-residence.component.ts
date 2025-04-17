import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ResidenceService } from '../Services/residence.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Residence } from 'src/core/models/residence';

@Component({
  selector: 'app-update-residence',
  templateUrl: './update-residence.component.html',
  styleUrls: ['./update-residence.component.css']
})
export class UpdateResidenceComponent implements OnInit {
  
  updateForm!: FormGroup;
  id!: number;
  listUpdate: Residence = new Residence();

  constructor(
    private serviceResidence: ResidenceService, 
    private router: Router, 
    private act: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.act.snapshot.params['id'];

    this.updateForm = new FormGroup({
      id: new FormControl(this.id, [Validators.required, Validators.pattern(/^[1-9][0-9]*$/)]),
      name: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      address: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(/^[A-Z][a-z].*/)]),
      image: new FormControl('', Validators.required),
      status: new FormControl('', [Validators.required, Validators.pattern(/^disponible$/)]),
    });
  
    this.serviceResidence.getResidenceById(this.id).subscribe((res: Residence) => {
      this.listUpdate = res;
      console.log(this.listUpdate);
      this.updateForm.patchValue({
        id: this.listUpdate.id,
        name: this.listUpdate.name,
        address: this.listUpdate.address,
        image: this.listUpdate.image,
        status: this.listUpdate.status
      });
    });
  }

  onSubmit() {
    if (this.updateForm.valid) {
      this.serviceResidence.updateResidence( this.updateForm.value , this.id).subscribe(() => {
        console.log('Residence updated successfully');
        this.router.navigate(['/residences']); // Navigate back to the list or desired route
      });
    }
  }
}