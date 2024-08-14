import { Injectable } from '@angular/core';
import { createClient } from 'smtpexpress';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  private smtpexpressClient: any;

  constructor() {
    this.smtpexpressClient = createClient({
      projectId: 'sm0pid-qnq1rqKvAoFRM2PgQovVem5iU',       // Replace with your actual project ID
      projectSecret: 'a7ec40b53b2219329d6461c980d84192b0a0eecaa052a02ba7' // Replace with your actual project secret
    });
  }

  sendEmail(subject: string, message: string, recipientName: string, recipientEmail: string) {
    return this.smtpexpressClient.sendApi.sendMail({
      subject: subject,
      message: message,
      sender: {
        name: 'Opeyemi',
        email: 'sm0pid-qnq1rqKvAoFRM2PgQovVem5iU@projects.smtpexpress.com' // Replace with your sender email
      },
      recipients: {
        // name: recipientName,
        email: 'opeyeminwafor@gmail.com'
      }
    });
  }
}
