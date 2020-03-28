import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';

@Component({
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar-component.component.html'
})
export class DemoComponent implements OnInit {

  @Input()
  data: any[] = [];
  MatchType: any = {
    draggable: false, color: '', start: Date, end: Date, resizable: { beforeStart: true, afterEnd: true },
    title: '', allDay: true
  }
  view: CalendarView = CalendarView.Month;

  viewDate: Date = new Date();

  events: CalendarEvent[] = [];

  ngOnInit(): void {
    this.data.map((match: any) => {
      this.MatchType.title = match['team-1'] + 'vs' + match['team-2'] + ' ' + match.type;
      this.MatchType.start = new Date(new Date(match.dateTimeGMT));
      this.MatchType.end = new Date(match.dateTimeGMT);
      this.events.push(JSON.parse(JSON.stringify(this.MatchType)));
    })
    // if (this.events.length) {
    //   this.addEvent();
    //   console.log(this.events);
  }

}
