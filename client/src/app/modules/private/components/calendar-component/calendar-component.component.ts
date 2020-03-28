import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';
import { JsonPipe } from '@angular/common';


interface MyEvent extends CalendarEvent {
  name: String;
}
@Component({
  selector: 'mwl-demo-component',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './calendar-component.component.html'
})
export class DemoComponent implements OnInit {

  @Input()
  data: any;
  MyEventTemplatestring: any;
  view: CalendarView = CalendarView.Month;

  viewDate: Date = new Date();

  events: MyEvent[] = [];
  MyEventTemplate: MyEvent = { name: '', start: new Date(), end: new Date(), title: '' }
  ngOnInit(): void {
    for (let i = 0; i < this.data.length; i++) {
      // this.MyEventTemplate.name = match['team-1'];
      this.MyEventTemplate.start = new Date(this.data[i]['date']);
      this.MyEventTemplate.end = new Date(this.data[i]['date']);
      this.MyEventTemplate.title = this.data[i]['team-1'] + " vs " + this.data[i]['team-2'];
      this.MyEventTemplatestring = JSON.stringify(this.MyEventTemplate);
      this.events.push(JSON.parse(this.MyEventTemplatestring, (key, value) => {
        if (key == 'start' || key == 'end') {
          console.log(key);
          value = new Date(value);
          return value;
        }
        else
          return value;
      }))
    }
    console.log(this.events);

    // if (this.events.length) {
    //   this.addEvent();
    //   console.log(this.events);
  }

}
