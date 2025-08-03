import { Component, ElementRef , ViewChild, AfterViewInit } from '@angular/core';
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

export class Home implements AfterViewInit {

  @ViewChild('contactForm') contactForm!: ElementRef<HTMLFormElement>;

  ngAfterViewInit(): void {
  const slides = document.querySelectorAll('.slide');
  const nextBtn = document.querySelector('.next') as HTMLElement;
  const prevBtn = document.querySelector('.prev') as HTMLElement;
  let currentSlide = 0;

  function showSlide(index: number) {
    slides.forEach((slide, i) => {
      (slide as HTMLElement).classList.toggle('active', i === index);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    });
  }

  showSlide(currentSlide);
}

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
