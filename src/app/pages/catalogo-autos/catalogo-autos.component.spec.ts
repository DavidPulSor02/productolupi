import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoAutosComponent } from './catalogo-autos.component';

describe('CatalogoAutosComponent', () => {
  let component: CatalogoAutosComponent;
  let fixture: ComponentFixture<CatalogoAutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatalogoAutosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatalogoAutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
