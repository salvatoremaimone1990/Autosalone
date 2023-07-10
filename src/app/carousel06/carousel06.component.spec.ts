import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Carousel06Component } from './carousel06.component';

describe('Carousel06Component', () => {
  let component: Carousel06Component;
  let fixture: ComponentFixture<Carousel06Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Carousel06Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Carousel06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
