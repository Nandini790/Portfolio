import { Component, ElementRef , ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { trigger, style, animate, transition } from '@angular/animations';
import emailjs from '@emailjs/browser';


@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true,
})

export class Home {

  @ViewChild('contactForm') contactForm!: ElementRef<HTMLFormElement>;

  sendEmail() {
    emailjs.sendForm(
      'YOUR_SERVICE_ID',        // Replace with your actual service ID
      'YOUR_TEMPLATE_ID',       // Replace with your EmailJS template ID
      this.contactForm.nativeElement,
      'YOUR_PUBLIC_USER_ID'     // Your public user ID from EmailJS
    ).then(() => {
      alert('Message sent successfully!');
      this.contactForm.nativeElement.reset();
    }).catch((error) => {
      console.error('Email send failed:', error);
    });
  }
}
