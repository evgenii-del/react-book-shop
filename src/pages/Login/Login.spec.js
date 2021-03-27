import React from 'react';
import { shallow } from 'enzyme';
import * as redux from 'react-redux';

import Login from './Login';

const useDispatchSpy = jest.spyOn(redux, 'useDispatch');

describe('should render Login component', () => {
  let component;

  beforeEach(() => {
    useDispatchSpy.mockReturnValue(() => {});
    component = shallow(<Login />);
  });

  it('should contain .container wrapper', () => {
    const wrapper = component.find('.login');
    expect(wrapper.length).toBe(1);
  });
});
