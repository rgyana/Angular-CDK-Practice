import {
  Component,
  ViewChild,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

import { OverlayConfig, OverlayRef, Overlay} from '@angular/cdk/overlay'
import { TemplatePortal } from '@angular/cdk/portal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cdk_modal_01';
  overlay : any;

  @ViewChild('template') template!: TemplateRef<unknown>;

  constructor(private viewContainerRef: ViewContainerRef,private overlayRef: OverlayRef) {}

  openWithTemplate(){
    const config  = new OverlayConfig({
      hasBackdrop : true,
      panelClass : ['modal', 'active'],
      backdropClass: 'modal-backdrop',
      scrollStrategy: this.overlay.scrollStrategy.block(),
    });
    this.overlayRef = this.overlay.create(config);
    this.overlayRef.attach(new TemplatePortal(this.template, this.viewContainerRef))
  }

  closeModal(){
    this.overlayRef.dispose();
  }
}
