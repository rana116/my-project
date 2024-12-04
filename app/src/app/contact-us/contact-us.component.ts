import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  standalone: false,
  
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {
  contact = {
    name: '',
    email: '',
    message: ''
  };

  submitted = false; 

  onSubmit() {
    // Here you would typically handle the form submission,
    // e.g., send data to a server or API.
    
    console.log('Contact Form Submitted', this.contact);
    
    // Reset form after submission
    this.submitted = true;
    
    // Clear the form fields
    this.contact.name = '';
    this.contact.email = '';
    this.contact.message = '';
  }
}
