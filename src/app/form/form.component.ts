import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  {

  registerForm!: FormGroup;
  submitted = false;
  firstName = '';
  lastName = '';
  city = '';
  address = '';
  appointmentType='';
  
  constructor(private fb: FormBuilder) { }
  
  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', Validators.required],
      city: [''],
      address: ['', Validators.required]
    });
  }
  
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    else {
      alert('Your appointment is Successful. ');
      console.log(this.registerForm.value);
      
  }
    
  }
}
