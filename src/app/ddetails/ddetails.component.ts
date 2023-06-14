import { Component, OnInit } from '@angular/core';
import {PserviceService} from '../pservice.service';


@Component({
  selector: 'app-ddetails',
  template: `
  <h1>Doctor Details</h1>
  <ul *ngFor="let d of Doctor">
    <li>{{ d.drID }} - {{ d.drName }} - {{ d.drSpec }}</li>
  </ul>
`,
  styleUrls: ['./ddetails.component.css']
})
export class DdetailsComponent implements OnInit {

  public Doctor: any[] = [];
  constructor(private _projservice:PserviceService){}
  ngOnInit(): void {
    this._projservice.getDoctor().subscribe(data=>this.Doctor=data);
  }

}
