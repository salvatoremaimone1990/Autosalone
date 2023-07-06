import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuovoMessaggioComponent } from './nuovomessaggio.component';
describe('NuovoMessaggioComponent', () => {
  let component: NuovoMessaggioComponent;
  let fixture: ComponentFixture<NuovoMessaggioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NuovoMessaggioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NuovoMessaggioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
