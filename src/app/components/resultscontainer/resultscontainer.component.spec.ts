import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultscontainerComponent } from './resultscontainer.component';

describe('ResultscontainerComponent', () => {
  let component: ResultscontainerComponent;
  let fixture: ComponentFixture<ResultscontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultscontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultscontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
