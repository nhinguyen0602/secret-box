import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  // tslint:disable-next-line:object-literal-sort-keys
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {

  @Input() public title: string;
  @Input() public routerLink: string;
  @Input() public icon: string;

  constructor() { }

  public ngOnInit(): void {
  }

}
