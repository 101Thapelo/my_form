import { Component, OnInit } from '@angular/core';
import {List} from "../employee_list";
@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  title = ' CodeTribe Employee-List';
  employee = [
   
  ];
  model :any={};
  model2 :any={};
  addEmployee(){
    this.employee.push(this.model);
    this.model ={};
    
  }
  deleteEmployee(i){
    this.employee.splice(i,1)
    console.log(i);
  }
  myValue;
  editEmployee(k){
    this.model2.name =this.employee[k].name;
    this.model2.position =this.employee[k].lastName;
    this.model2.position =this.employee[k].gender;
    this.model2.position =this.employee[k].contact;
    this.model2.position =this.employee[k].organizationUnit;
    this.model2.position =this.employee[k].bio;
    this.myValue =k;
  }
  updateEmployee(){ 
    let k = this.myValue;
    for (let i =0; i<this.employee.length;i++)
    if(i==k){
      this.employee[i] =this.model2;
      this.model2 ={};
    } 

  }
 
 

  constructor() { }

  ngOnInit() {
  }

}
