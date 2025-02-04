import { Request, Response } from 'express';
import { getBalanceSheet } from '../src/handlers/reports';

global.fetch = jest.fn();

const mockRequest = {} as Request;
const mockResponse = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
} as unknown as Response;

/**
 * Test Suite for Balance Sheet Report Handler
 *
 * @description Tests the getBalanceSheet handler functionality including success and error scenarios
 *
 * @mocks
 * - Response object with status and json methods
 * - Global fetch API
 * - Request object
 *
 * @testCases
 * - Should return balance sheet data successfully (200)
 * - Should handle API call failures (500)
 *
 */

describe('getBalanceSheet', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should return balance sheet data', async () => {
        const mockData = {
            data: {
                Status: 'OK',
            },
        };
        (global.fetch as jest.Mock).mockResolvedValue({
            ok: true,
            json: () => Promise.resolve(mockData),
        });

        await getBalanceSheet(mockRequest, mockResponse);

        expect(mockResponse.status).toHaveBeenCalledWith(200);
        expect(mockResponse.json).toHaveBeenCalledWith(
            expect.objectContaining({
                result: expect.objectContaining({
                    data: expect.objectContaining({
                        Status: 'OK',
                    }),
                }),
            })
        );
    });

    it('shoudl handle API call failure', async () => {
        (global.fetch as jest.Mock).mockResolvedValue({
            ok: false,
            status: 500,
        });

        await getBalanceSheet(mockRequest, mockResponse);

        expect(mockResponse.status).toHaveBeenCalledWith(500);
        expect(mockResponse.json).toHaveBeenCalledWith({
            error: 'Failed to fetch balance sheet',
        });
    });
});
