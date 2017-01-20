import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Title } from '@angular/platform-browser';
import { ParameterService } from './parameter.service';
import { Goal } from './goal';

@Component({
  selector: 'app-counter',
  templateUrl: './app.component.html',
  entryComponents: [],
  providers: [ Location ],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private goal: Goal;

  constructor(private location: Location, private titleService: Title, private parameterService: ParameterService) {
  }

  ngOnInit() {
    this.titleService.setTitle('counter');
    let url = this.location.path(false);
    let parsed = this.parameterService.parse(url);

    if (parsed != null) {
      this.goal = parsed;
    } else {
      let now = new Date();
      let yearFromNow = now;
      yearFromNow.setFullYear(now.getFullYear() + 1);
      this.goal = new Goal(yearFromNow);
      this.setStateToUrl();
    }
  }

  onEndChange(date: Date) {
    if(date != null) {
      this.goal = new Goal(date, this.goal.message);
      this.setStateToUrl();
    }
  }

  private setStateToUrl() {
    let encoded = this.parameterService.encode(this.goal);
    this.location.replaceState(`${encoded}`);
  }

}
