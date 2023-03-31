import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnMCAComponent } from './learn-mca.component';

describe('LearnMCAComponent', () => {
  let component: LearnMCAComponent;
  let fixture: ComponentFixture<LearnMCAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LearnMCAComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LearnMCAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
