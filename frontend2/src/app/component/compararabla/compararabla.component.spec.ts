import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompararablaComponent } from './compararabla.component';

describe('CompararablaComponent', () => {
  let component: CompararablaComponent;
  let fixture: ComponentFixture<CompararablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompararablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompararablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
