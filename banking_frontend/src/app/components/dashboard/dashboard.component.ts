import { Component } from '@angular/core';
declare function transactType(): any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  
  paymethod=["Payment","Transfer","Deposit","Withdraw"];
  selected:string = "";

  showTab = 0;
  tabToggle(index:any){
    this.showTab =index;
  }
}
