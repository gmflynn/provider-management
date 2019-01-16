import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

export interface Vendor {
  active: boolean;
  name: string;
  recipientid: number;
  numberofrooms: number;
}

const VENDOR_DATA: Vendor[] = [
  {active: true, name: 'MadSky', recipientid: 1434323, numberofrooms: 3},
  {active: true, name: 'Nexxus', recipientid: 8565234, numberofrooms: 4},
  {active: false, name: 'Merrimack Roofs', recipientid: 7732455, numberofrooms: 2},
  {active: true, name: 'Roof Repair Co.', recipientid: 2233775, numberofrooms: 2},
  {active: false, name: 'Pyramid', recipientid: 1127645, numberofrooms: 3},
  {active: false, name: 'NewPro', recipientid: 2221766, numberofrooms: 1},
];

@Component({
  selector: 'app-grn',
  templateUrl: './grn.component.html',
  styleUrls: ['./grn.component.scss']
})
export class GRNComponent implements OnInit {
  displayedColumns: string[] = ['active', 'name', 'recipientid', 'numberofrooms'];
  dataSource = new MatTableDataSource(VENDOR_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  constructor() { }

  ngOnInit() {
  }

}
