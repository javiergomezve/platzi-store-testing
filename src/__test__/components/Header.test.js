import React from 'react';
import { mount, shallow } from 'enzyme';

import ProviderMock from '../../__mocks__/ProviderMock';
import Header from '../../components/Header';

describe('<Header />', () => {
  const header = shallow(
    <ProviderMock>
      <Header />
    </ProviderMock>
  );

  test('should render Header', () => {
    expect(header.length).toEqual(1);
  });

  test('should render the title', () => {
    const header = mount(
      <ProviderMock>
        <Header />
      </ProviderMock>
    );

    expect(header.find('.Header-title').text()).toEqual('Platzi Store');
  });
});
