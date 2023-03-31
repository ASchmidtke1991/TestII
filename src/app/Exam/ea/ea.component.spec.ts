import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EaComponent } from './ea.component';

describe('EaComponent', () => {
  let component: EaComponent;
  let fixture: ComponentFixture<EaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
