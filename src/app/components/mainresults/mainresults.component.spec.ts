import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainresultsComponent } from './mainresults.component';

describe('MainresultsComponent', () => {
  let component: MainresultsComponent;
  let fixture: ComponentFixture<MainresultsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainresultsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainresultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
