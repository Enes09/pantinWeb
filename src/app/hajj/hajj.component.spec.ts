import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HajjComponent } from './hajj.component';

describe('HajjComponent', () => {
  let component: HajjComponent;
  let fixture: ComponentFixture<HajjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HajjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HajjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
