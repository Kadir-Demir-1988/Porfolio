import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sayaboutme',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sayaboutme.component.html',
  styleUrl: './sayaboutme.component.scss',
})
export class SayaboutmeComponent {
  testimonials = [
    {
      quote:
        'Lukas has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of our project.',
      author: 'H. Janisch - Team Partner',
    },
    {
      quote:
        'I had the good fortune of working with Lukas. His effort and knowledge were essential for our success.',
      author: 'A. Schulz - Frontend Developer',
    },
    {
      quote:
        "Lukas' efficient way of working inspired the whole team. His dedication was amazing!",
      author: 'M. Schneider - Project Manager',
    },
  ];

  currentIndex = 0;

  // ngOnInit() {
  //   setInterval(() => {
  //     this.nextSlide();
  //   }, 5000); // Wechselt alle 5 Sekunden
  // }

  nextBtn(): void {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  // Funktion für den Zurück-Button
  previousBtn(): void {
    this.currentIndex =
      (this.currentIndex - 1 + this.testimonials.length) %
      this.testimonials.length;
  }

  // Optional: Rückgabe der aktuellen Testimonial-Daten
  getCurrentTestimonial() {
    return this.testimonials[this.currentIndex];
  }
}
