import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {CalendarPageComponent} from './calendar-page/calendar-page.component';
import {MonthViewComponent} from './month-view/month-view.component';
import {DayViewComponent} from './day-view/day-view.component';
import {TodoViewComponent} from './todo-view/todo-view.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'detail/:id', component: DayViewComponent },
  { path: 'detail/todo/:id', component: TodoViewComponent },
  { path: 'calendar', component: CalendarPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
