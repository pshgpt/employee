import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByManagerComponent } from './search-by-manager.component';

describe('SearchByManagerComponent', () => {
  let component: SearchByManagerComponent;
  let fixture: ComponentFixture<SearchByManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
