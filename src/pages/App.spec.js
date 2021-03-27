import React from 'react';
import { shallow } from 'enzyme';
import * as redux from 'react-redux';

import App from './App';

const useSelectorSpy = jest.spyOn(redux, 'useSelector');
describe('should render App component', () => {
  let component;

  beforeEach(() => {
    useSelectorSpy.mockReturnValue({ user: { token: 'token' } });
    component = shallow(<App />);
  });

  it('should contain .wrapper wrapper', () => {
    const wrapper = component.find('.wrapper');
    expect(wrapper.length).toBe(1);
  });
});
