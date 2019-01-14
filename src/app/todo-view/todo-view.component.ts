import {Component, OnInit} from '@angular/core';
import {Calendar} from '../calendar';
import {ActivatedRoute} from '@angular/router';
import {CalendarServiceService} from '../calendar-service.service';
import {Location} from '@angular/common';
import {Hour} from '../mock-calendars';

@Component({
  selector: 'app-todo-view',
  templateUrl: './todo-view.component.html',
  styleUrls: ['./todo-view.component.css']
})
export class TodoViewComponent implements OnInit {
  item: Calendar;
  cals: Calendar[];
  // private hours = [
  //   {hour: '00', desc: ''}, {hour: '01', desc: ''}, {hour: '02', desc: ''}, {hour: '03', desc: ''},
  //   {hour: '04', desc: ''}, {hour: '05', desc: ''}, {hour: '06', desc: ''}, {hour: '07', desc: ''},
  //   {hour: '08', desc: ''}
  //   // ,
  //   // {hour: '09'}, {hour: '10'}, {hour: '11'}, {hour: '12'}, {hour: '13'}, {hour: '14'}, {hour: '15'}, {hour: '16'}, {hour: '17'},
  //   // {hour: '18'}, {hour: '19'}, {hour: '20'}, {hour: '21'}, {hour: '22'}, {hour: '23'}, {hour: '24'}
  // ]
  hhh: Hour[] = [];

  constructor(private route: ActivatedRoute,
              private calendarServiceService: CalendarServiceService,
              private location: Location) {
  }

  public addMyNote(hour: number, desc: string) {
    this.calendarServiceService.addNote(hour, desc);
  }

  ngOnInit() {
    this.getCalendar();
    this.hhh = this.calendarServiceService.getNotes();
  }

  getCalendar(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.calendarServiceService.getCalendar(id)
      .subscribe(hero => this.item = hero);
  }

  goBack(): void {
    this.location.back();
  }

  saveNote() {

  }

}
