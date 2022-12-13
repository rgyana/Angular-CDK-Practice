import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
  ApplicationRef,
  Injector,
  ViewContainerRef,
} from '@angular/core';
// import { HeaderComponentComponent } from './header-component/header-component.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  private componentRef: any;

  @ViewChild('testTemplate') testTemplate: TemplateRef<any>;

  constructor(
    private applicationRef: ApplicationRef,
    private injector: Injector,
    private viewContainerRef: ViewContainerRef
  ) {}

  ngOnInit(): void {
    // locate an element that exist on the page
    const headerElement = document.querySelector('#pageHeader');

    // locate the component factory for the header component
    const embeddedView = this.viewContainerRef.createEmbeddedView(this.testTemplate, {$implicit: "Bobby"});

    // place element in correct location in DOM
    embeddedView.rootNodes.forEach(rootNode =>headerElement.appendChild(rootNode));
  }
}
