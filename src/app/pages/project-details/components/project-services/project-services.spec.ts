import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectServices } from './project-services';

describe('ProjectServices', () => {
  let component: ProjectServices;
  let fixture: ComponentFixture<ProjectServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectServices],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectServices);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
