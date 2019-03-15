import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultByNameComponent } from './result-by-name.component';

describe('ResultByNameComponent', () => {
  let component: ResultByNameComponent;
  let fixture: ComponentFixture<ResultByNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultByNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
