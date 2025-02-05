import { useEffect, useState } from 'react';
import { balanceSheet } from '../types/balanceSheetTypes';

type UseGetBalanceSheetResult = {
    data: balanceSheet | undefined;
    error: string | null;
    loading: boolean;
};

/**
 * Custom hook to fetch balance sheet data
 *
 * @hook
 * @description Fetches balance sheet data from the API and manages loading/error states
 *
 * @returns {Object} Hook result object
 * @returns {BalanceSheet | undefined} data - Balance sheet data from API
 * @returns {string | null} error - Error message if request fails
 * @returns {boolean} loading - Loading state indicator
 *
 *
 * @dependencies
 * - React hooks (useState, useEffect)
 */

export const useGetBalanceSheet = (): UseGetBalanceSheetResult => {
    const [data, setData] = useState<balanceSheet>();
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const BALANCE_SHEET_URL = 'http://localhost:3001/api/balancesheet';

    const getBalanceSheet = async () => {
        try {
            setLoading(true);
            setError(null);
            const response = await fetch(BALANCE_SHEET_URL, {
                method: 'GET',
                headers: {
                    'Access-Control-Allow-Origin': '*',
                },
            });

            if (!response.ok) {
                throw new Error('Failed to fetch balance sheet');
            }

            const result = (await response.json()) as balanceSheet;
            setData(result);
        } catch (error) {
            setError('Error in fetching balance sheet');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getBalanceSheet();
    }, []);

    return { data, error, loading };
};
