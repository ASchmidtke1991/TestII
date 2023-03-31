import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnSCOComponent } from './learn-sco.component';

describe('LearnSCOComponent', () => {
  let component: LearnSCOComponent;
  let fixture: ComponentFixture<LearnSCOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnSCOComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnSCOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
