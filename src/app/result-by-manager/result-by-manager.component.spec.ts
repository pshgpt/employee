import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultByManagerComponent } from './result-by-manager.component';

describe('ResultByManagerComponent', () => {
  let component: ResultByManagerComponent;
  let fixture: ComponentFixture<ResultByManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultByManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultByManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
