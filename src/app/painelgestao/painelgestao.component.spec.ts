import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelgestaoComponent } from './painelgestao.component';

describe('PainelgestaoComponent', () => {
  let component: PainelgestaoComponent;
  let fixture: ComponentFixture<PainelgestaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PainelgestaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelgestaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
