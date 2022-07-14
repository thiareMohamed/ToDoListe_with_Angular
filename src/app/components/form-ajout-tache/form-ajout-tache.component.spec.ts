import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAjoutTacheComponent } from './form-ajout-tache.component';

describe('FormAjoutTacheComponent', () => {
  let component: FormAjoutTacheComponent;
  let fixture: ComponentFixture<FormAjoutTacheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAjoutTacheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAjoutTacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
