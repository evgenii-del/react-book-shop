import React from 'react';
import { shallow } from 'enzyme';
import PrivateRouter from './PrivateRouter';
import * as redux from 'react-redux';

const useSelectorSpy = jest.spyOn(redux, 'useSelector');

describe('should render PrivateRouter component', () => {
  let component;

  beforeEach(() => {
    useSelectorSpy.mockReturnValue({ token: 'token' });
    component = shallow(<PrivateRouter />);
  });

  it('should contain one child', () => {
    expect(component.length).toEqual(1);
  });
});
