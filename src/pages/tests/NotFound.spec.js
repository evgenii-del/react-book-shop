import React from 'react';
import { shallow } from 'enzyme';

import NotFound from '../NotFound';

describe('should render Card component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<NotFound />);
  });

  it('should contain .not-found wrapper', () => {
    const wrapper = component.find('.not-found');
    expect(wrapper.length).toBe(1);
  });

  it('should contain title', () => {
    const title = component.find('.not-found__title');
    expect(title.text()).toBe('Oops!');
  });
});
