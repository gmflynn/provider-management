import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {EMPTY, Observable} from 'rxjs';
import {ScorecardDetail} from './grn/scorecard-detail';

@Injectable({
  providedIn: 'root'
})
export class VendorService {

    private scorecardUrl = '/api/grn/property/vendors/';
    constructor(private http: HttpClient) { }

    public searchScorecards(zipCode: string): Observable<ScorecardDetail> {
        if (!zipCode.trim()) {
            return EMPTY;
        }

        return this.http.get(`${this.scorecardUrl}` + zipCode + '/GRN');
    }
}
