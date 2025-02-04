export interface BalanceSheet {
    result: {
        Status: string;
        Reports: Report[];
    };
}

export interface Report {
    ReportID: string;
    ReportName: string;
    ReportType: string;
    ReportTitles: string[];
    ReportDate: string;
    UpdatedDateUTC: string;
    Fields: [];
    Rows: Row[];
}

export interface Row {
    RowType: 'Header' | 'Section' | 'Row' | 'SummaryRow';
    Title?: string;
    Cells?: Cell[];
    Rows?: Row[];
}

export interface Cell {
    Value: string;
    Attributes?: Attribute[];
}

export interface Attribute {
    Value: string;
    Id: 'account' | 'fromDate' | 'toDate';
}

export interface FinancialData {
    currentValue: string;
    previousValue: string;
    accountId?: string;
}

export interface Section {
    title: string;
    rows: Row[];
    totalCurrent: string;
    totalPrevious: string;
}
