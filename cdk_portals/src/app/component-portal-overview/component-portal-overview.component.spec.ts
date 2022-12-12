import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentPortalOverviewComponent } from './component-portal-overview.component';

describe('ComponentPortalOverviewComponent', () => {
  let component: ComponentPortalOverviewComponent;
  let fixture: ComponentFixture<ComponentPortalOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentPortalOverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentPortalOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
