import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirtablaComponent } from './subirtabla.component';

describe('SubirtablaComponent', () => {
  let component: SubirtablaComponent;
  let fixture: ComponentFixture<SubirtablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubirtablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubirtablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
