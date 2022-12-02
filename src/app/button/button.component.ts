import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() className: string;
  @Input('link') destination: string;
  @Input() text: string;

  constructor() { }

  ngOnInit(): void {
  }

}
