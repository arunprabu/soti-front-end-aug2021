import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CebComponent } from './ceb.component';

describe('CebComponent', () => {
  let component: CebComponent;
  let fixture: ComponentFixture<CebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
