import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-language-toggle',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './language-toggle.component.html',
  styleUrls: ['./language-toggle.component.scss'],
})
export class LanguageToggleComponent {
  currentLanguage = 'en';

  constructor(private translate: TranslateService) {
    this.translate.addLangs(['de', 'en']);
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
  toggleLanguage(): void {
    this.currentLanguage = this.currentLanguage === 'en' ? 'de' : 'en';
    this.translate.use(this.currentLanguage);
    console.log(`Sprache gewechselt zu: ${this.currentLanguage}`);
  }
}
