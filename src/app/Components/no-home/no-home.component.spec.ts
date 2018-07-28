import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoHomeComponent } from './no-home.component';

describe('NoHomeComponent', () => {
  let component: NoHomeComponent;
  let fixture: ComponentFixture<NoHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
