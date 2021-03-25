import React from 'react';
import { shallow } from 'enzyme';
import * as redux from 'react-redux';

import Header from '../Header';

const useSelectorSpy = jest.spyOn(redux, 'useSelector');
const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
describe('should render Header component', () => {
  let component;

  beforeEach(() => {
    useSelectorSpy.mockReturnValue({ user: { username: 'Name', avatar: '...' } });
    useDispatchSpy.mockReturnValue(() => {});
    component = shallow(<Header />);
  });

  it('should contain .header wrapper', () => {
    const wrapper = component.find('.header');
    expect(wrapper.length).toBe(1);
  });
});
