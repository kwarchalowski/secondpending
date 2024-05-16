import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondPendingElementComponent } from './second-pending-element.component';

describe('SecondPendingElementComponent', () => {
  let component: SecondPendingElementComponent;
  let fixture: ComponentFixture<SecondPendingElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecondPendingElementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecondPendingElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
