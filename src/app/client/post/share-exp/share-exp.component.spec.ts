import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareExpComponent } from './share-exp.component';

describe('ShareExpComponent', () => {
  let component: ShareExpComponent;
  let fixture: ComponentFixture<ShareExpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShareExpComponent]
    });
    fixture = TestBed.createComponent(ShareExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
