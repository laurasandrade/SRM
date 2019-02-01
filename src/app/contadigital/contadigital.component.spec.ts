import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadigitalComponent } from './contadigital.component';

describe('ContadigitalComponent', () => {
  let component: ContadigitalComponent;
  let fixture: ComponentFixture<ContadigitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContadigitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContadigitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
