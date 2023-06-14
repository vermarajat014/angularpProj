import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    message: ''
  };

  submitForm() {
    // Perform any necessary form submission logic here
    console.log('Form submitted:', this.formData);
    // You can send the form data to a server or perform any other action as needed
  }
}
