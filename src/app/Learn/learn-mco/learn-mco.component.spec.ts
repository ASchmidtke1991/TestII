import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnMCOComponent } from './learn-mco.component';

describe('LearnMCOComponent', () => {
  let component: LearnMCOComponent;
  let fixture: ComponentFixture<LearnMCOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnMCOComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnMCOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
