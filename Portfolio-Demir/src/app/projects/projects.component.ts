import { Component } from '@angular/core';
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
    imageUrl: 'assets/img/projectimg/join.svg',
    description: 'A task management tool inspired by Trello.',
    gitHubUrl: '',
    projectUrl: '',
  },
  {
    id: 2,
    title: 'El Pollo Loco',
    stack: ['HTML', 'CSS', 'JavaScript'],
    imageUrl: 'assets/img/projectimg/elpolloloco.svg',
    description: '',
    gitHubUrl: '',
    projectUrl: '',
  },
  {
    id: 3,
    title: 'Da Bubble',
    stack: ['Angular', 'Firebase', 'Typescript'],
    imageUrl: 'assets/img/projectimg/elpolloloco.svg',
    description: '',
    gitHubUrl: '',
    projectUrl: '',
  },
];
