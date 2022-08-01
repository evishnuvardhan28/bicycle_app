import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiycycleDashComponent } from './biycycle-dash.component';

describe('BiycycleDashComponent', () => {
  let component: BiycycleDashComponent;
  let fixture: ComponentFixture<BiycycleDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BiycycleDashComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BiycycleDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
