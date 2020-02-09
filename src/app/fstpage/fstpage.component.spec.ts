import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FstpageComponent } from './fstpage.component';

describe('FstpageComponent', () => {
  let component: FstpageComponent;
  let fixture: ComponentFixture<FstpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FstpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FstpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
