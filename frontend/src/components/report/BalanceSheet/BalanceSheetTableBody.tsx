import { report } from '../../../types/balanceSheetTypes';
import { BalanceSheetTableRow } from './BalanceSheetTableRow';

type TableBodyProps = {
    report: report;
};

/**
 * Balance Sheet Table Body Component
 *
 * @component
 * @description Renders the body section of balance sheet table, filtering out header row
 *
 * @param {report} - Report data containing rows to be displayed
 *
 * @dependencies
 * - BalanceSheetTableRow component
 */
export const BalanceSheetTableBody = ({ report }: TableBodyProps) => {
    const bodyRows = report.Rows.filter((row) => row.RowType !== 'Header');

    return (
        <tbody>
            {bodyRows.map((row, index) => {
                return <BalanceSheetTableRow key={index} row={row} />;
            })}
        </tbody>
    );
};
