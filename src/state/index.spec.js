import chai, { expect } from 'chai';
import configureMockStore from 'redux-mock-store';
import sinonChai from 'sinon-chai';
import thunk from 'redux-thunk';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { Types, Actions } from '.';

chai.use(sinonChai);
const mock = new MockAdapter(axios);
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

/**
 * For a more complex application, each state slice lies in the feature directory.
 * So the tests are localized. Since we have a very small state, the tests can be
 * called "Default".
 */
describe('Default state', () => {
  afterEach(() => {
    mock.reset();
  });

  it('test fetchAds async action should call ADS_SUCCESS action', () => {
    mock.onGet('https://api.mcmakler.de/v1/advertisements').reply(200, []);

    const expectedActions = [
      { type: Types.ADS_REQUEST },
      { type: Types.ADS_SUCCESS, payload: [] },
    ];
    const store = mockStore({ ads: [] });

    return store.dispatch(Actions.fetchAds()).then(() => {
      expect(store.getActions()).to.deep.equal(expectedActions);
    });
  });

  it('test fetchAds async action should call ADS_ERROR action', () => {
    mock
      .onGet('https://api.mcmakler.de/v1/advertisements')
      .reply(500);

    const expectedActions = [
      { type: Types.ADS_REQUEST },
      { type: Types.ADS_ERROR, payload: 'Request failed with status code 500' },
    ];
    const store = mockStore({ ads: [] });

    return store.dispatch(Actions.fetchAds()).then(() => {
      expect(store.getActions()).to.deep.equal(expectedActions);
    });
  });
});
