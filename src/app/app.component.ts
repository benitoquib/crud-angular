import { Component } from '@angular/core';

import {Employee}from './models/employee'; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  employeearray: Employee[]=[
    {id:1,name:"Benito",country:"Guatemala"},
    {id:2,name:"Juan",country:"Argentina"},
    {id:3,name:"Jose",country:"USA"},
  ];
  selectedEmployee:Employee=new Employee();
  
}
