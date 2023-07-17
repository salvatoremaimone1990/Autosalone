import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnullaComponent } from './annulla.component';

describe('AnnullaComponent', () => {
  let component: AnnullaComponent;
  let fixture: ComponentFixture<AnnullaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnullaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnullaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
