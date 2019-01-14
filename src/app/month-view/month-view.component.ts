import {Component, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-month-view',
  templateUrl: './month-view.component.html',
  styleUrls: ['./month-view.component.css']
})
export class MonthViewComponent implements OnInit {

  @Input() _orders: Array<any>;
  @Input() _columns: { id: number, but00: string, but0: string, but1: string, but2: string, but3: string, but4: string, but5: string };
  @Input() _dynamicColumns: { name: String, template: TemplateRef<any> }[];

  ngOnInit(): void {
  }
}
