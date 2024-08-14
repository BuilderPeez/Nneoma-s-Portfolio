import { Component } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  fullName: string = '';
  email: string = '';
  message: string = '';
  constructor(
    private emailService: EmailService
  ) {}

  // sendEmail() {
  //   const subject = 'A message from the express';
  //   const message = '<h1>Welcome to the future of Email Delivery</h1>';
  //   const recipientName = 'My recipients name';
  //   const recipientEmail = 'recipient@recipients.com';

  //   this.emailService.sendEmail(subject, message, recipientName, recipientEmail)
  //     .then((response: any) => {
  //       console.log('Email sent successfully', response);
  //     })
  //     .catch((error: any) => {
  //       console.error('Error sending email', error);
  //     });
  // }
  onSubmit() {
    const subject = `Message from ${this.fullName}, ${this.email}`;
    const payload = {
      name: this.fullName,
      email: this.email,
      sender: subject
    }
    this.emailService.sendEmail(subject, this.message, this.fullName, this.email)
      .then((response: any) => {
        console.log('Email sent successfully', response);
        alert('Email sent successfully!');
        this.clearForm();
      })
      .catch((error: any) => {
        console.error('Error sending email', error);
        alert('There was an error sending the email.');
      });
  }
  // onSubmit() {
  //   const subject = `Message from ${this.fullName} ${this.email}`;
  //   const payload = {
  //     name: this.fullName,
  //     email: this.email,
  //     sender: subject,
  //     message: this.message
  //   }
  //   console.log(payload)
  //   this.emailService.sendEmail(payload)
  //     .then((response: any) => {
  //       console.log('Email sent successfully', response);
  //       alert('Email sent successfully!');
  //       this.clearForm();
  //     })
  //     .catch((error: any) => {
  //       console.error('Error sending email', error);
  //       alert('There was an error sending the email.');
  //     });
  // }

  // onSubmit() {
  //   const subject = `Message from ${this.fullName},`;
  //   console.log(subject, this.message, this.fullName, this.email, 'test')
  //   this.emailService.sendEmail(subject, this.message, this.fullName, this.email)
  //     .then((response: any) => {
  //       console.log('Email sent successfully', response);
  //       alert('Email sent successfully!');
  //       this.clearForm();
  //     })
  //     .catch((error: any) => {
  //       console.error('Error sending email', error);
  //       alert('There was an error sending the email.');
  //     });
  // }
  clearForm() {
    this.fullName = '';
    this.email = '';
    this.message = '';
  }
}
