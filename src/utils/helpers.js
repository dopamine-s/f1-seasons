import { FIRST_SEASON_YEAR } from '../constants/constants';

export const currentYear = new Date().getFullYear();
export const seasonsQuantity = currentYear - FIRST_SEASON_YEAR + 1;
