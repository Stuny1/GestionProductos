import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescargartablaComponent } from './descargartabla.component';

describe('DescargartablaComponent', () => {
  let component: DescargartablaComponent;
  let fixture: ComponentFixture<DescargartablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescargartablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescargartablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
