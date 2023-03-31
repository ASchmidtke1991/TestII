import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EMCComponent } from './emc.component';

describe('EMCComponent', () => {
  let component: EMCComponent;
  let fixture: ComponentFixture<EMCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EMCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EMCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
