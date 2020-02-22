import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchsidebarComponent } from './searchsidebar.component';

describe('SearchsidebarComponent', () => {
  let component: SearchsidebarComponent;
  let fixture: ComponentFixture<SearchsidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchsidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchsidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
