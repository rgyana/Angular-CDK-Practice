import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OverlayModule} from '@angular/cdk/overlay';
import { OverlayBasicExampleComponent } from './overlay-basic-example/overlay-basic-example.component';

@NgModule({
  declarations: [
    AppComponent,
    OverlayBasicExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
