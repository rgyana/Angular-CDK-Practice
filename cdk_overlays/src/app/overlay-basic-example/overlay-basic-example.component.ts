import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overlay-basic-example',
  templateUrl: './overlay-basic-example.component.html',
  styleUrls: ['./overlay-basic-example.component.css']
})
export class OverlayBasicExampleComponent implements OnInit {

  isOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

}
