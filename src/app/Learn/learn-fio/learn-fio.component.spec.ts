import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnFIOComponent } from './learn-fio.component';

describe('LearnFIOComponent', () => {
  let component: LearnFIOComponent;
  let fixture: ComponentFixture<LearnFIOComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnFIOComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearnFIOComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
