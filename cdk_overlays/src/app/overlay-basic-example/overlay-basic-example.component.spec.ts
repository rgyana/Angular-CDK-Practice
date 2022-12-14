import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverlayBasicExampleComponent } from './overlay-basic-example.component';

describe('OverlayBasicExampleComponent', () => {
  let component: OverlayBasicExampleComponent;
  let fixture: ComponentFixture<OverlayBasicExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverlayBasicExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OverlayBasicExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
