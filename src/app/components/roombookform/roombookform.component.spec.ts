import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoombookformComponent } from './roombookform.component';

describe('RoombookformComponent', () => {
  let component: RoombookformComponent;
  let fixture: ComponentFixture<RoombookformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoombookformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoombookformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
