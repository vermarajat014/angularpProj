import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DdetailsComponent } from './ddetails.component';

describe('DdetailsComponent', () => {
  let component: DdetailsComponent;
  let fixture: ComponentFixture<DdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DdetailsComponent]
    });
    fixture = TestBed.createComponent(DdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
