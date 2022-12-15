import { Injectable } from '@angular/core';
import { Overlay, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { FilePreviewOverlayComponent } from './file-preview-overlay/file-preview-overlay.component';
import { FilePreviewDialogConfig } from './file-preview-dialog-config';
import { FilePreviewOverlayRef } from './file-preview-overlay-ref';

const DEFAULT_CONFIG: FilePreviewDialogConfig = {
  hasBackdrop: true,
  backdropClass: 'dark-backdrop',
  panelClass: 'tm-file-preview-dialog-panel',
};

@Injectable({
  providedIn: 'root',
})
export class FilePreviewOverlayService {
  constructor(private overlay: Overlay) {}

  private getOverlayConfig(config: FilePreviewDialogConfig): OverlayConfig{
    const positionStrategy = this.overlay.position().global().top("50px").left("50px");

    const overlayConfig = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy
    });
    return overlayConfig;
  }

  private createOverlay(config: FilePreviewDialogConfig){
    const overlayConfig = this.getOverlayConfig(config);
    return this.overlay.create(overlayConfig);
  }

  open(config: FilePreviewDialogConfig = {}) {
    // override default configuration
    const dialogConfig = { ...DEFAULT_CONFIG, ...config };

    // returns an overlayRef (which is a PortalHost)
    const overlayRef = this.createOverlay(dialogConfig);

    // instanitite remote control
    const dialogRef = new FilePreviewOverlayRef(overlayRef);

    const filePreviewPortal = new ComponentPortal(FilePreviewOverlayComponent);
    // created ComponentPortal that can be attaced to a PortalHost

    // attach ComponentPortal to the PortalHost
    overlayRef.attach(filePreviewPortal);

    return dialogRef;
  }
}
