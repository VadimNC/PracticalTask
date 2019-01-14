import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CalendarPageComponent } from './calendar-page/calendar-page.component';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { MonthViewComponent } from './month-view/month-view.component';
import { DayViewComponent } from './day-view/day-view.component';
import { FormsModule } from '@angular/forms';
import {CalendarServiceService} from './calendar-service.service';
import { TodoViewComponent } from './todo-view/todo-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CalendarPageComponent,
    CalendarViewComponent,
    HomeViewComponent,
    MonthViewComponent,
    DayViewComponent,
    TodoViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [CalendarServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
