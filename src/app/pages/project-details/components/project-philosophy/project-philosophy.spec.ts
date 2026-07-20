import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPhilosophy } from './project-philosophy';

describe('ProjectPhilosophy', () => {
  let component: ProjectPhilosophy;
  let fixture: ComponentFixture<ProjectPhilosophy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectPhilosophy],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectPhilosophy);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
