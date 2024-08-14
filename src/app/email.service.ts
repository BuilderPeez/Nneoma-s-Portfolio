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

  sendEmail(subject: string, message: string, senderName: string, senderEmail: string) {
    return this.smtpexpressClient.sendApi.sendMail({
      subject: subject,
      message: message,
      sender: {
        name: 'Nneoma',
        email: 'sm0pid-qnq1rqKvAoFRM2PgQovVem5iU@projects.smtpexpress.com' 
      },
      recipients: {
        // name: recipientName,
        email: 'onuohanneoma7@gmail.com'
      }
    });
  }

  // sendEmail(data: any) {
  //   console.log(data)
  //   return this.smtpexpressClient.sendApi.sendMail({
  //     subject: data.subject,
  //     message: data.message,
  //     sender: {
  //       name: 'Pe',
  //       email: 'opeyafor@gmail.com' 
  //       // name: data.name,
  //       // email: data.email 
  //     },
      
  //     recipients: {
  //       // name: recipientName,
  //       email: 'opeyeminwafor@gmail.com'
  //     }
      
  //   });
  // }
}
