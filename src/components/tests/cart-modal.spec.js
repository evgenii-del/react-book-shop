import React from 'react';
import { shallow } from 'enzyme';

import CartModal from '../CartModal';

import * as redux from 'react-redux';

const spy = jest.spyOn(redux, 'useSelector');
spy.mockReturnValue({
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

describe('should render CartModal component', () => {
  let component;

  beforeEach(() => {
    component = shallow(<CartModal isPopupOpen={false} />);
  });

  it('should contain .cart-modal wrapper', () => {
    const wrapper = component.find('.cart-modal');

    expect(wrapper.length).toBe(1);
  });

  it('should render table', () => {
    const wrapper = component.find('tr');

    expect(wrapper.length).toBe(2);
  });

  it('should not contain .cart-modal_active wrapper', () => {
    const wrapper = component.find('.cart-modal_active');

    expect(wrapper.length).toBe(0);
  });
});
