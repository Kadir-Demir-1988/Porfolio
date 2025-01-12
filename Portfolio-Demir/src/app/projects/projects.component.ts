import { Component, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  projects = PROJECTS;
  currentProjectIndex: number | null = null;
  isTemplateVisible = false; // Zustand für Sichtbarkeit

  constructor(private renderer: Renderer2) {}

  openProject(index: number) {
    this.currentProjectIndex = index;
    this.isTemplateVisible = true;
    this.disableScroll();
  }

  closeTemplate() {
    this.isTemplateVisible = false;
    this.enableScroll(); // Scrollen aktivieren
    setTimeout(() => {
      this.currentProjectIndex = null;
    }, 500); // Animation berücksichtigen
  }

  nextProject() {
    if (this.currentProjectIndex !== null) {
      this.currentProjectIndex =
        (this.currentProjectIndex + 1) % this.projects.length;
    }
  }

  // Scrollen deaktivieren
  disableScroll() {
    this.renderer.setStyle(document.body, 'overflow', 'hidden');
  }

  // Scrollen aktivieren
  enableScroll() {
    this.renderer.removeStyle(document.body, 'overflow');
  }

  get currentProject() {
    return this.currentProjectIndex !== null
      ? this.projects[this.currentProjectIndex]
      : null;
  }

  formatStack(stack: string[]): string {
    return stack
      .map((tech) => `<span class="tech">${tech}</span>`)
      .join('<span class="divider"> | </span>');
  }
}

export const PROJECTS = [
  {
    id: 1,
    title: 'Join',
    stack: ['HTML', 'CSS', 'JavaScript'],
    stackimgUrl: [
      'assets/img/projectimg/stackimg/HTML.svg',
      'assets/img/projectimg/stackimg/CSS.svg',
      'assets/img/projectimg/stackimg/Javascript.svg',
    ],
    hoverimageUrl: 'assets/img/projectimg/join.svg',
    templateimageUrl: 'assets/img/projectimg/Jointemplate.svg',
    description:
      'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    gitHubUrl: '',
    projectUrl: '',
  },
  {
    id: 2,
    title: 'El Pollo Loco',
    stack: ['HTML', 'CSS', 'JavaScript'],
    stackimgUrl: [
      'assets/img/projectimg/stackimg/HTML.svg',
      'assets/img/projectimg/stackimg/CSS.svg',
      'assets/img/projectimg/stackimg/Javascript.svg',
    ],
    hoverimageUrl: 'assets/img/projectimg/elpolloloco.svg',
    templateimageUrl: 'assets/img/projectimg/elpollolocotemplate.svg',
    description:
      'Jump, run and throw game based on object-oriented approach. Help Pepe to find coins and tabasco salsa to fight against the crazy hen.',
    gitHubUrl: '',
    projectUrl: '',
  },
  {
    id: 3,
    title: 'Da Bubble',
    stack: ['Angular', 'Firebase', 'Typescript'],
    stackimgUrl: [
      'assets/img/projectimg/stackimg/Angular.svg',
      'assets/img/projectimg/stackimg/Firebase.svg',
      'assets/img/projectimg/stackimg/TypeScript.svg',
    ],
    hoverimageUrl: 'assets/img/projectimg/dabubble.svg',
    templateimageUrl: 'assets/img/projectimg/dabubbletemplate.svg',
    description:
      'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
    gitHubUrl: '',
    projectUrl: '',
  },
];
