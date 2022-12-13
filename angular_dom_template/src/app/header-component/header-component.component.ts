import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css'],
})
export class HeaderComponentComponent implements OnInit {
  title = 'Hello world';

  constructor() {
    setTimeout(() => {
      this.title = 'Updated';
    }, 5000);
  }

  ngOnInit(): void {}
}
