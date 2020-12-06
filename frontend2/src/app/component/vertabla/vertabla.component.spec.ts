import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VertablaComponent } from './vertabla.component';

describe('VertablaComponent', () => {
  let component: VertablaComponent;
  let fixture: ComponentFixture<VertablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VertablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VertablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
