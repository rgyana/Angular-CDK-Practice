import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentPortalComponent } from './component-portal.component';

describe('ComponentPortalComponent', () => {
  let component: ComponentPortalComponent;
  let fixture: ComponentFixture<ComponentPortalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentPortalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentPortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
