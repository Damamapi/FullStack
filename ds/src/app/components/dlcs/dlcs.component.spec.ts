import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DlcsComponent } from './dlcs.component';

describe('DlcsComponent', () => {
  let component: DlcsComponent;
  let fixture: ComponentFixture<DlcsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DlcsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DlcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
