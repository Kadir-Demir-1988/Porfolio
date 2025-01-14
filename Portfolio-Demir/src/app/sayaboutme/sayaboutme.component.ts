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
        'Kadir has proven to be a reliable group partner. His technical skills and proactive approach were crucial to the success of our project.',
      author: 'H. Yashar - Team Partner',
    },
    {
      quote:
        'I had the good fortune of working with Kadir. His effort and knowledge were essential for our success.',
      author: 'L. Nolting - Frontend Developer',
    },
    {
      quote:
        "Kadir' efficient way of working inspired the whole team. His dedication was amazing!",
      author: 'S. Kalin - Team Partner',
    },
  ];

  currentIndex = 0;
  isSlidingIn = false;
  isSlidingOut = false;

  nextBtn(): void {
    this.triggerSlide('next');
  }

  previousBtn(): void {
    this.triggerSlide('previous');
  }

  private triggerSlide(direction: 'next' | 'previous') {
    this.isSlidingOut = true; // Beginne die Animation
    setTimeout(() => {
      this.currentIndex =
        direction === 'next'
          ? (this.currentIndex + 1) % this.testimonials.length
          : (this.currentIndex - 1 + this.testimonials.length) %
            this.testimonials.length;

      this.isSlidingOut = false; // Entferne alte Animation
      this.isSlidingIn = true; // Starte die nächste Animation
      setTimeout(() => {
        this.isSlidingIn = false; // Animation komplett entfernen
      }, 500); // Entspricht der Transition-Zeit im SCSS
    }, 500); // Entspricht der Transition-Zeit im SCSS
  }
}
