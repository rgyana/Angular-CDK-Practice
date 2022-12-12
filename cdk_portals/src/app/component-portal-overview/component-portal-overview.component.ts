import { Component, AfterViewInit, ViewChild, TemplateRef, ElementRef, ViewContainerRef } from '@angular/core';
import { Portal, ComponentPortal, TemplatePortal, DomPortal } from '@angular/cdk/portal';
import { ComponentPortalComponent } from '../component-portal/component-portal.component';

@Component({
  selector: 'app-component-portal-overview',
  templateUrl: './component-portal-overview.component.html',
  styleUrls: ['./component-portal-overview.component.css']
})
export class ComponentPortalOverviewComponent implements AfterViewInit {

  selectedPortal: Portal<any>;
  componentPortal : ComponentPortal<ComponentPortalComponent>;
  templatePortal : TemplatePortal<any>;
  domPortal : DomPortal<any>;

  @ViewChild('templatePortalContent') templatePortalContent : TemplateRef<unknown>;
  @ViewChild('domPortalContent') domPortalContent : ElementRef<HTMLElement>

  constructor( private viewContainerRef: ViewContainerRef ) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
      this.componentPortal = new ComponentPortal(ComponentPortalComponent);
      this.templatePortal = new TemplatePortal (this.templatePortalContent, this.viewContainerRef);
      this.domPortal = new DomPortal(this.domPortalContent);
  }
}
