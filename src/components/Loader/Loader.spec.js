import React from 'react';
import { shallow } from 'enzyme';
import Loader from './Loader';

describe('should render Loader component', () => {
  it('should contain .loader wrapper', () => {
    const component = shallow(<Loader />);
    const wrapper = component.find('.loader');
    expect(wrapper.length).toBe(1);
  });
});
