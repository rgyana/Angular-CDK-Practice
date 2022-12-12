import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentPortalComponent } from './component-portal/component-portal.component';
import { ComponentPortalOverviewComponent } from './component-portal-overview/component-portal-overview.component';
import { PortalModule} from '@angular/cdk/portal';

@NgModule({
  declarations: [
    AppComponent,
    ComponentPortalComponent,
    ComponentPortalOverviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    PortalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
