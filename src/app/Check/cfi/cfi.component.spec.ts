import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CfiComponent } from './cfi.component';

describe('CfiComponent', () => {
  let component: CfiComponent;
  let fixture: ComponentFixture<CfiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CfiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CfiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
