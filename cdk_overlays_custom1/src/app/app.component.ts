import { Component } from '@angular/core';
import { FilePreviewOverlayRef } from './file-preview-overlay-ref';
import { FilePreviewOverlayService } from './file-preview-overlay.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cdk_overlays_custom1';

  files = [
    {name: 'image_01', path: ''},
    {name: 'image_02', path: ''},
    {name: 'image_03', path: ''},
  ]

  constructor(private previewDialog : FilePreviewOverlayService){}

  showPreview(){
    let dialogRef: FilePreviewOverlayRef = this.previewDialog.open();

    setTimeout(()=>{
      dialogRef.close();
    }, 2000);
  }
}
