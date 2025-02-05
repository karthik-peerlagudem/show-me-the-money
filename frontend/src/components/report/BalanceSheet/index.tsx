import React from 'react';
import { balanceSheet } from '../../../types/balanceSheetTypes';
import { BalanceSheetTableBody } from './BalanceSheetTableBody';
import { BalanceSheetTableHeader } from './BalanceSheetTableHeader';

type BalanceSheetReportProps = {
    reportData: balanceSheet | undefined;
};

/**
 * Balance Sheet Report Component
 *
 * @component
 * @description Renders a balance sheet report with headers, titles, and data in tabular format
 *
 * @param {balanceSheet} - Balance sheet data from API
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
