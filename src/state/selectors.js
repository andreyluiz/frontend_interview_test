import { createSelector as select } from 'reselect';
import chunk from 'lodash/chunk';

const getState = state => state;

/**
 * Selects the isLoading flag.
 */
export const selectIsLoading = select(getState, s => s.isLoading);

/**
 * Selects the ads array.
 */
export const selectAds = select(getState, s => chunk(s.ads, 3));

/**
 * Selects the error string.
 */
export const selectError = select(getState, s => s.error);
