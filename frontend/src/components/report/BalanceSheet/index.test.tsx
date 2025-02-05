/** @jsx React.createElement */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import { BalanceSheetReport } from '../BalanceSheet/index';
import { balanceSheet } from '../../../types/balanceSheetTypes';

describe('BalanceSheetReport', () => {
    const mockBalanceSheetData: balanceSheet = {
        result: {
            Status: 'Ok',
            Reports: [
                {
                    ReportID: 'BalanceSheet',
                    ReportName: 'Balance Sheet',
                    ReportType: 'BalanceSheet',
                    ReportTitles: [],
                    ReportDate: '04 February 2025',
                    UpdatedDateUTC: '/Date(1738668095130)/',
                    Fields: [],
                    Rows: [
                        {
                            RowType: 'Header',
                            Cells: [
                                { Value: '' },
                                { Value: '04 February 2025' },
                                { Value: '05 February 2024' },
                            ],
                        },
                        {
                            RowType: 'Section',
                            Title: 'Assets',
                            Rows: [],
                        },
                    ],
                },
            ],
        },
    };

    const renderComponent = () => {
        return render(
            React.createElement(BalanceSheetReport, {
                reportData: mockBalanceSheetData,
            })
        );
    };

    it('renders the balance sheet header', () => {
        renderComponent();
        expect(screen.getByText('Balance Sheet')).toBeInTheDocument();
        expect(screen.getByText('04 February 2025')).toBeInTheDocument();
        expect(screen.getByText('05 February 2024')).toBeInTheDocument();
    });

    it('renders report titles', () => {
        renderComponent();
        mockBalanceSheetData.result.Reports[0].ReportTitles.forEach((title) => {
            expect(screen.getByText(title)).toBeInTheDocument();
        });
    });

    it('renders section titles', () => {
        renderComponent();
        expect(screen.getByText('Assets')).toBeInTheDocument();
    });
});
