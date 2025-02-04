import { Row } from '../../types/balance-sheet';
import { formatCurrency } from '../../lib/utils';

type TableRowProps = {
    row: Row;
};

/**
 * Balance Sheet Table Row Component
 *
 * @component
 * @description Renders different types of rows in a balance sheet table (Section, Row, SummaryRow)
 *
 * @param {Row} - Row data containing type and cell information
 *
 */

export const BalanceSheetTableRow = ({ row }: TableRowProps) => {
    if (row.RowType === 'Section') {
        return (
            <>
                {row.Title !== '' && (
                    <tr>
                        <td colSpan={3} className="section-header">
                            {row.Title}
                        </td>
                    </tr>
                )}
                {row.Rows &&
                    row.Rows.map((row) => {
                        if (row.RowType === 'Row') {
                            return (
                                <tr>
                                    {row.Cells?.map((cell, index) => {
                                        return (
                                            <td key={index}>
                                                {formatCurrency(cell.Value)}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        }
                        if (row.RowType === 'SummaryRow') {
                            return (
                                <tr>
                                    {row.Cells?.map((cell, index) => {
                                        return (
                                            <td key={index}>
                                                {formatCurrency(cell.Value)}
                                            </td>
                                        );
                                    })}
                                </tr>
                            );
                        }
                    })}
            </>
        );
    }
};
