import ProductMock from '../../__mocks__/ProductMock';
import reducers from '../../reducers';

describe('Reducers', () => {
  test('should return initialState', () => {
    expect(reducers({}, '')).toEqual({});
  });

  test('ADD_TO_CART', () => {
    const initialState = {
      cart: [],
    };

    const payload = ProductMock;

    const action = {
      type: 'ADD_TO_CART',
      payload,
    };

    const expected = {
      cart: [ProductMock],
    };

    expect(reducers(initialState, action)).toEqual(expected);
  });
});
