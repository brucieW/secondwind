import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberNewsComponent } from './member-news.component';

describe('MemberNewsComponent', () => {
  let component: MemberNewsComponent;
  let fixture: ComponentFixture<MemberNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberNewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
