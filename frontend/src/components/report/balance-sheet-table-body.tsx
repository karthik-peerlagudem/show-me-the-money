import { Report } from '../../types/balance-sheet';
import { BalanceSheetTableRow } from './balance-sheet-table-row';

type TableBodyProps = {
    report: Report;
};

/**
 * Balance Sheet Table Body Component
 *
 * @component
 * @description Renders the body section of balance sheet table, filtering out header row
 *
 * @param {Report} - Report data containing rows to be displayed
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
