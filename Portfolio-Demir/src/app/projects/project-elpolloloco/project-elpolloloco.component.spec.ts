import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectElpollolocoComponent } from './project-elpolloloco.component';

describe('ProjectElpollolocoComponent', () => {
  let component: ProjectElpollolocoComponent;
  let fixture: ComponentFixture<ProjectElpollolocoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectElpollolocoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectElpollolocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
