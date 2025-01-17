import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  isChecked = false; // Status der Checkbox
  isTouched = false; // Wurde die Checkbox angeklickt?

  toggleCheckbox() {
    this.isChecked = !this.isChecked; // Zustand umkehren
    this.isTouched = true; // Checkbox wurde berührt
    console.log('Checkbox toggled:', this.isChecked); // Debug-Ausgabe
  }

  onSubmit(form: any) {
    if (this.isChecked) {
      alert('Thank you for your message!');
    }
  }
}
