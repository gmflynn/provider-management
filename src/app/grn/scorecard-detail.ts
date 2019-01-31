export class ScorecardDetail {
    activeIndicator: boolean;
    vendors: Array<ScorecardVendor>;
}

export class ScorecardVendor {
    subtype: string;
    activeIndicator: boolean;
    recipientId: number;
    vendorName: string;
    scorecardAllocation: number;
    perilStatesHandled: Array<Peril>;
    roofingMaterialsHandled: Array<string>;
    numberOfRoomsHandled: number;
}

export class Peril {
    type: string;
    states: Array<string>;
}

