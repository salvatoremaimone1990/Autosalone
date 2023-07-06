import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovaComponent } from './nuova.component';

describe('NuovaComponent', () => {
  let component: NuovaComponent;
  let fixture: ComponentFixture<NuovaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuovaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
