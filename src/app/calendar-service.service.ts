import {Injectable} from '@angular/core';
import {Calendar} from './calendar';
import {Observable, of} from 'rxjs/index';
import {Hour} from './mock-calendars';

@Injectable({
  providedIn: 'root'
})
export class CalendarServiceService {
  private listCalendars: Calendar[] = [
    {id: 11, name: 'January'},
    {id: 12, name: 'February'},
    {id: 13, name: 'March'},
    {id: 14, name: 'April'},
    {id: 15, name: 'May'},
    {id: 16, name: 'June'},
    {id: 17, name: 'July'},
    {id: 18, name: 'August'},
    {id: 19, name: 'September'},
    {id: 20, name: 'October'},
    {id: 21, name: 'November'},
    {id: 22, name: 'December'}
  ]
  private hours: Hour[] = [];

  public addNote(hour: number, desc: string) {
    this.hours.push(new Hour(hour, desc));
  }

  getNotes(): Hour[] {
    return this.hours;
  }

  getAllCalendars(): Observable<Calendar[]> {
    return of(this.listCalendars);
  }

  getCalendar(id: number): Observable<Calendar> {
    return of(this.listCalendars.find(cal => cal.id === id));
  }
}
