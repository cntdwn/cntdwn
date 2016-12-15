import { Input, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  public isInEditMode = false;
  @Input() public end: Date;

  constructor() {
  }

  ngOnInit() {
  }

  toggle() {
    this.isInEditMode = !this.isInEditMode;
  }
}
