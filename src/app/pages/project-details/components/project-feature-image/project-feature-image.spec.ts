import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFeatureImage } from './project-feature-image';

describe('ProjectFeatureImage', () => {
  let component: ProjectFeatureImage;
  let fixture: ComponentFixture<ProjectFeatureImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectFeatureImage],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectFeatureImage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
