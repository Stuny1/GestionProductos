import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdministrartablaComponent } from './administrartabla.component';

describe('AdministrartablaComponent', () => {
  let component: AdministrartablaComponent;
  let fixture: ComponentFixture<AdministrartablaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdministrartablaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdministrartablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
