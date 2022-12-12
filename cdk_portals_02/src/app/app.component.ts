import { Component, ComponentFactoryResolver, Injector, OnInit, ApplicationRef } from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  private componentRef: any;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private applicationRef : ApplicationRef
  ) {}

  ngOnInit(): void {
      // locate and element that exist on page
      const headerElement = document.querySelector('#pageHeader');

      // locate component factory for component header
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(HeaderComponent);

      // generate an instance of header component
      this.componentRef = componentFactory.create(this.injector, [], headerElement);

      // attach to the component to angular's component tree for dirty checking
      this.applicationRef.attachView(this.componentRef.hostView);
  }
}
