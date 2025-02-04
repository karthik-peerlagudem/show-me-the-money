/**
 * Express Router Configuration for Xero API Integration
 *
 * @module Router
 *
 * @description Configures Express routes for handling Xero API endpoints
 *
 * @routes
 * GET /balancesheet - Retrieves balance sheet report from Xero
 *
 */

import { Router } from 'express';
import { getBalanceSheet } from './handlers/reports';

const router = Router();

router.get('/balancesheet', getBalanceSheet);

export default router;
