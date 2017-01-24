import { Component, OnChanges, SimpleChanges, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { TimerService } from '../timer.service';
import { Remaining } from '../remaining';
import { PadZeroPipe } from '../pad-zero.pipe';
import { Goal } from '../goal';


@Component({
  selector: 'app-timer-display',
  templateUrl: './timer-display.component.html',
  styleUrls: ['./timer-display.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ TimerService, PadZeroPipe ]
})
export class TimerDisplayComponent implements OnChanges {
  @Input() public goal: Goal;
  public remaining: Remaining;

  constructor(private timerService: TimerService,
              private cd: ChangeDetectorRef) {

  }

  ngOnChanges(changes: SimpleChanges) {
    for(let propName in changes) {
      if (propName === 'goal') {
        this.timerService.tick(this.goal.end).subscribe((remaining: Remaining) => {
          this.remaining = remaining;
          this.cd.markForCheck();
        });
      }
    }
  }
}
