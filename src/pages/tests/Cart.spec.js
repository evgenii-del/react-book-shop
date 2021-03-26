import React from 'react';
import { shallow } from 'enzyme';
import * as redux from 'react-redux';

import Cart from '../Cart';

const useSelectorSpy = jest.spyOn(redux, 'useSelector');
const useDispatchSpy = jest.spyOn(redux, 'useDispatch');

describe('should render Cart component', () => {
  let component;

  beforeEach(() => {
    useSelectorSpy.mockReturnValue({
      user: { token: 'token' },
      cart: {
        books: [
          {
            book: {
              id: '5',
              title: 'Building A JavaScript Framework',
              author: 'Alex Young',
              level: 'Advanced',
              description: 'best Of Let’s Make a Framework articles.',
              cover: 'https://jsbooks.revolunet.com/img/cover_buildingjsframework.png',
              tags: ['core'],
              price: 45.74,
              count: 11,
            },
            totalCount: 1,
            totalPrice: 45.74,
          },
        ],
        totalCount: 1,
        totalPrice: 45.74,
      },
    });
    useDispatchSpy.mockReturnValue(() => {});
    component = shallow(<Cart />);
  });

  it('should contain .cart', () => {
    const wrapper = component.find('.cart');
    expect(wrapper.length).toBe(1);
  });
});
