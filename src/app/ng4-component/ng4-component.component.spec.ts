import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng4ComponentComponent } from './ng4-component.component';

describe('Ng4ComponentComponent', () => {
  let component: Ng4ComponentComponent;
  let fixture: ComponentFixture<Ng4ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Ng4ComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Ng4ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
