import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnFIAComponent } from './learn-fia.component';

describe('LearnFIAComponent', () => {
  let component: LearnFIAComponent;
  let fixture: ComponentFixture<LearnFIAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnFIAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnFIAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
