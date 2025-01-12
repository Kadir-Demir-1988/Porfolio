import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-language-toggle',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './language-toggle.component.html',
  styleUrls: ['./language-toggle.component.scss'],
})
export class LanguageToggleComponent {
  isEnglish = true; // Standardmäßig Englisch

  toggleLanguage() {
    this.isEnglish = !this.isEnglish;
    console.log(
      'Sprache umgeschaltet auf:',
      this.isEnglish ? 'Englisch' : 'Deutsch'
    );
  }
}
