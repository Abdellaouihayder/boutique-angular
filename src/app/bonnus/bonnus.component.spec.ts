import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BonnusComponent } from './bonnus.component';

describe('BonnusComponent', () => {
  let component: BonnusComponent;
  let fixture: ComponentFixture<BonnusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BonnusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BonnusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
