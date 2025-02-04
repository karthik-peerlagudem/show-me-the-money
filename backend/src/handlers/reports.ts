import { config } from 'dotenv';
import path from 'path';
import { Request, Response } from 'express';

config({ path: path.resolve(__dirname, '../../.env') });

const API_END_POINT = process.env.API_END_POINT;

if (!API_END_POINT) {
    throw new Error('API_END_POINT is not defined');
}

/**
 * Retrieves the balance sheet report from Xero API
 *
 * @param {Request} req - Express request object
 * @param {Response} res - Express response object
 *
 * @returns {Promise<void>} Returns void, sends JSON response
 *
 * @throws {Error} When API_END_POINT environment variable is not defined
 *
 */
export const getBalanceSheet = async (req: Request, res: Response) => {
    try {
        // Assuming authorization is handled
        const response = await fetch(`${API_END_POINT}/Reports/BalanceSheet`);

        if (!response.ok) {
            throw new Error(`API call failed: ${response.status}`);
        }

        const result = await response.json();
        res.status(200).json({ result });
    } catch (error) {
        res.status(500).json({
            error: 'Failed to fetch balance sheet',
        });
    }
};
