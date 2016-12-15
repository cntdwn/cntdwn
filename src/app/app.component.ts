import { Component, OnInit } from '@angular/core';
import { Location as Loc } from '@angular/common';
import { ParameterService } from './parameter.service';

@Component({
  selector: 'app-counter',
  templateUrl: './app.component.html',
  entryComponents: [],
  providers: [ Loc ],
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private end: Date;

  constructor(private location: Loc, private parameterService: ParameterService) {
  }

  ngOnInit() {
    let url = this.location.path(false);
    let parsed = this.parameterService.parseDate(url);

    if (parsed != null) {
      this.end = parsed;
    } else {
      let now = new Date();
      let yearFromNow = now;
      yearFromNow.setFullYear(now.getFullYear() + 1);
      this.end = yearFromNow;
      let encodedDate = this.parameterService.encodeDate(this.end);
      this.location.replaceState(`${this.location.path(false)}${encodedDate}`);
    }
  }
}
