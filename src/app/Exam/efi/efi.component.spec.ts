import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EFIComponent } from './efi.component';

describe('EFIComponent', () => {
  let component: EFIComponent;
  let fixture: ComponentFixture<EFIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EFIComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EFIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
