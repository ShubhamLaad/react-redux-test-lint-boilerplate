import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import sinon from 'sinon';
import RequestProvider from '../utils/request.provider';
import ContryActions from './contry.action';

describe('Bets Action', () => {
  let sandbox = null;
  let store = null;
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const contries = [
    { name: 'Afghanistan', alpha2_code: 'AF', alpha3_code: 'AFG' },
    { name: '��land Islands', alpha2_code: 'AX', alpha3_code: 'ALA' },
    { name: 'Albania', alpha2_code: 'AL', alpha3_code: 'ALB' },
  ];
  const responseData = {
    RestResponse: { result: contries },
  };

  beforeEach(() => {
    store = mockStore();
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it('Should create proper action for setContries action creator.', () => {
    const expectedAction = ContryActions.setContries(responseData);
    store.dispatch(ContryActions.setContries(responseData));
    expect(store.getActions()[0]).toEqual(expectedAction);
  });

  it('Success of getContries should produce proper setContries action with data.', () => {
    const resolved = new Promise(r => r({
      data: responseData,
    }));

    sandbox.stub(RequestProvider, 'fetch').returns(resolved);

    const expectedAction = ContryActions.setContries(contries);

    return store.dispatch(ContryActions.getContries()).then(() => {
      expect(store.getActions()[0]).toEqual(expectedAction);
    });
  });
});
