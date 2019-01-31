import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import {VendorService} from '../vendor.service';
import {DataSource} from '@angular/cdk/table';
import {Observable} from 'rxjs';
import {ScorecardVendor} from './scorecard-detail';

@Component({
  selector: 'app-grn',
  templateUrl: './grn.component.html',
  styleUrls: ['./grn.component.scss']
})
export class GRNComponent implements OnInit {
    displayedColumns: string[] = ['active', 'name', 'recipientid', 'numberofrooms', 'allocation'];
    dataSource;

    constructor(private vendorService: VendorService) { }

    search(zipCode: string): void {
        this.dataSource = new GRNDataSource(this.vendorService, zipCode);
    }

    getIcon(bool: boolean): string {
       return (bool) ? 'check_circle' : 'cancel';
    }

    ngOnInit(): void {
    }
}

export class GRNDataSource extends DataSource<any> {
    constructor(private vendorService: VendorService, private zipCode: string) {
        super();
    }
    connect(): Observable<ScorecardVendor[]> {
            return this.vendorService.searchScorecards(this.zipCode).pipe(
                map(response => {
                    return response.vendors;
            }));
    }
    disconnect() {}
}
