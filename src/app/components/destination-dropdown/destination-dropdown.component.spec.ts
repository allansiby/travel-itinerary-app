import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestinationDropdownComponent } from './destination-dropdown.component';

describe('DestinationDropdownComponent', () => {
  let component: DestinationDropdownComponent;
  let fixture: ComponentFixture<DestinationDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DestinationDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DestinationDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
