// @flow
import { createDuck } from 'redux-duck';
import axios from 'axios';

/**
 * I use redux-duck in all my React + Redux projects. This simple library
 * provides a good way to standardise the way Redux states slices are created
 * and managed. Check it out below.
 */
const duck = createDuck('advertisements');

// Some action types to be dispatched in the request to the API
const ADS_REQUEST = duck.defineType('ADS_REQUEST');
const ADS_SUCCESS = duck.defineType('ADS_SUCCESS');
const ADS_ERROR = duck.defineType('ADS_ERROR');

// For testing purposes.
export const Types = { ADS_REQUEST, ADS_SUCCESS, ADS_ERROR };

// The actions from the action types. They may or may not pass a payload attribute.
const adsRequest = duck.createAction(ADS_REQUEST);
const adsSuccess = duck.createAction(ADS_SUCCESS);
const adsError = duck.createAction(ADS_ERROR);

/**
 * In a more complex application, this action would not have this form.
 * My recommendation on this cases is to create a middleware and parse a custom
 * action for specific API requests and optimizations. And example could be:
 *
 * {
 *   types: [ADS_REQUEST, ADS_SUCCESS, ADS_ERROR],
 *   method: 'get',
 *   url: '/advertisements',
 *   onSuccess: resolve
 * }
 *
 * With this shape the actions become easier to test and in a good standard form.
 *
 * For the sake of simplicity I'll keep the old fashion async redux action.
 */
export const fetchAds = () =>
  (dispatch: Function) => {
    // Request set isLoading flag to true
    dispatch(adsRequest());
    return axios.get('https://api.mcmakler.de/v1/advertisements')
      .then(({ data }) => {
        // Success set isLoading back to false and receives the data.
        dispatch(adsSuccess(data));
      })
      .catch((err) => {
        // Error set isLoading back to false and receives the error.
        dispatch(adsError(err.message));
      });
  };

// For testing purposes.
export const Actions = { adsRequest, adsSuccess, adsError, fetchAds };

const INITIAL_STATE = {
  isLoading: false,
  ads: [],
  error: null,
};

// Redux Duck defines the reducer the Flux way. As an object.
export const reducer = duck.createReducer({
  [ADS_REQUEST]: state => ({
    ...state,
    isLoading: true,
  }),
  [ADS_SUCCESS]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    ads: payload,
  }),
  [ADS_ERROR]: (state, { payload }) => ({
    ...state,
    isLoading: false,
    error: payload,
  }),
}, INITIAL_STATE);
