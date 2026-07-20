import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudioPhilosophy } from './studio-philosophy';

describe('StudioPhilosophy', () => {
  let component: StudioPhilosophy;
  let fixture: ComponentFixture<StudioPhilosophy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudioPhilosophy],
    }).compileComponents();

    fixture = TestBed.createComponent(StudioPhilosophy);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
