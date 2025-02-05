export interface balanceSheet {
    result: {
        Status: string;
        Reports: report[];
    };
}

export interface report {
    ReportID: string;
    ReportName: string;
    ReportType: string;
    ReportTitles: string[];
    ReportDate: string;
    UpdatedDateUTC: string;
    Fields: [];
    Rows: row[];
}

export interface row {
    RowType: 'Header' | 'Section' | 'Row' | 'SummaryRow';
    Title?: string;
    Cells?: cell[];
    Rows?: row[];
}

export interface cell {
    Value: string;
    Attributes?: attribute[];
}

export interface attribute {
    Value: string;
    Id: 'account' | 'fromDate' | 'toDate';
}

export interface financialData {
    currentValue: string;
    previousValue: string;
    accountId?: string;
}

export interface section {
    title: string;
    rows: row[];
    totalCurrent: string;
    totalPrevious: string;
}
