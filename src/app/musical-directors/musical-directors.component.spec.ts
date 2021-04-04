import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicalDirectorsComponent } from './musical-directors.component';

describe('MusicalDirectorsComponent', () => {
  let component: MusicalDirectorsComponent;
  let fixture: ComponentFixture<MusicalDirectorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MusicalDirectorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicalDirectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
