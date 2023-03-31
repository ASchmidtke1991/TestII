import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnSCAComponent } from './learn-sca.component';

describe('LearnSCAComponent', () => {
  let component: LearnSCAComponent;
  let fixture: ComponentFixture<LearnSCAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnSCAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnSCAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
