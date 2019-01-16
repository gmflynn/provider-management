import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

export interface Vendor {
  active: boolean;
  name: string;
  recipientid: number;
  numberofrooms: number;
  allocation: number;
}

const VENDOR_DATA: Vendor[] = [
  {active: true, name: 'Rainbow', recipientid: 3452344, numberofrooms: 3, allocation: 50},
  {active: true, name: 'Paul Davis', recipientid: 8565234, numberofrooms: 4, allocation: 10},
  {active: false, name: 'Alacrity', recipientid: 1235243, numberofrooms: 2, allocation: 20},
  {active: true, name: 'All Brite', recipientid: 4564567, numberofrooms: 2, allocation: 0},
  {active: false, name: 'Puro Clean', recipientid: 1233341, numberofrooms: 3, allocation: 10},
  {active: false, name: 'ServPro', recipientid: 9084587, numberofrooms: 1, allocation: 10},
];

@Component({
  selector: 'app-ems',
  templateUrl: './ems.component.html',
  styleUrls: ['./ems.component.scss']
})
export class EMSComponent implements OnInit {
  displayedColumns: string[] = ['active', 'name', 'recipientid', 'numberofrooms', 'allocation'];
  dataSource = new MatTableDataSource(VENDOR_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor() { }

  ngOnInit() {
  }

}
