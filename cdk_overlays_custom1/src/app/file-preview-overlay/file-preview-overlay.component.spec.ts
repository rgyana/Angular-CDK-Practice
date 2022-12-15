import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilePreviewOverlayComponent } from './file-preview-overlay.component';

describe('FilePreviewOverlayComponent', () => {
  let component: FilePreviewOverlayComponent;
  let fixture: ComponentFixture<FilePreviewOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilePreviewOverlayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilePreviewOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
