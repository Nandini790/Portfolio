import { Component, ElementRef , ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
  standalone: true,
})

export class Home implements AfterViewInit {

  contactForm: FormGroup;
  isSubmitted = false;
  responseMessage = '';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
    });
  }

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

  onSubmit() {
    console.log('Form submitted start');
    if (this.contactForm.valid) {
      this.http.post('http://localhost:5000/api/contact/send', this.contactForm.value)
        .subscribe({
          next: (res: any) => {
            this.responseMessage = res.message;
            this.isSubmitted = true;
            this.contactForm.markAsPristine();
            this.contactForm.markAsUntouched();
            this.contactForm.reset();
            setTimeout(() => {
          this.responseMessage = '';
        }, 5000);
          },
          error: (err) => {
            console.error('Error sending message:', err);
            this.responseMessage = 'Something went wrong!';
            this.contactForm.reset();
            setTimeout(() => {
          this.responseMessage = '';
        }, 5000);
          }
        });
        console.log('Form submitted end');
    }
}
}
