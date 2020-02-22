import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontsearchComponent } from './frontsearch.component';

describe('FrontsearchComponent', () => {
  let component: FrontsearchComponent;
  let fixture: ComponentFixture<FrontsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrontsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
