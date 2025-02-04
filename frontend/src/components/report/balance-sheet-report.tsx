import React from 'react';
import { BalanceSheet } from '../../types/balance-sheet';
import { BalanceSheetTableBody } from './balance-sheet-table-body';
import { BalanceSheetTableHeader } from './balance-sheet-table-header';

type BalanceSheetReportProps = {
    reportData: BalanceSheet | undefined;
};

/**
 * Balance Sheet Report Component
 *
 * @component
 * @description Renders a balance sheet report with headers, titles, and data in tabular format
 *
 * @param {BalanceSheet} - Balance sheet data from API
 *
 *
 * @dependencies
 * - BalanceSheetTableHeader
 * - BalanceSheetTableBody
 * - BalanceSheet type
 */
export const BalanceSheetReport: React.FC<BalanceSheetReportProps> = ({
    reportData,
}) => {
    const reports = reportData?.result.Reports;

    if (!reports) {
        return <p>No report data available</p>;
    }

    return (
        <React.Fragment>
            {reports.map((report, index) => {
                return (
                    <div key={index} className="balance-sheet-report">
                        <h2>{report.ReportName}</h2>
                        <ul>
                            {report.ReportTitles.map((title, index) => (
                                <li key={index}>{title}</li>
                            ))}
                        </ul>
                        <table className="balance-sheet-table">
                            <BalanceSheetTableHeader report={report} />
                            <BalanceSheetTableBody report={report} />
                        </table>
                    </div>
                );
            })}
        </React.Fragment>
    );
};
