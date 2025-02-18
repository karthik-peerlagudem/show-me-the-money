import { report } from '../../../types/balanceSheetTypes';

type TableHeaderProps = {
    report: report;
};

/**
 * Balance Sheet Table Header Component
 *
 * @component
 * @description Renders the header row of a balance sheet table from report data
 *
 * @param {report} - Report data containing header row information
 *
 */

export const BalanceSheetTableHeader = ({ report }: TableHeaderProps) => {
    const headerRow = report.Rows.find((row) => row.RowType === 'Header');

    return (
        <thead>
            <tr>
                {headerRow?.Cells?.map((cell, index) => (
                    <th colSpan={cell.Value == '' ? 1 : 0} key={index}>
                        {cell.Value}
                    </th>
                ))}
            </tr>
        </thead>
    );
};
