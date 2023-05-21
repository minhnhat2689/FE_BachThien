import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NhipcauComponent } from './nhipcau.component';

describe('NhipcauComponent', () => {
  let component: NhipcauComponent;
  let fixture: ComponentFixture<NhipcauComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NhipcauComponent]
    });
    fixture = TestBed.createComponent(NhipcauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
