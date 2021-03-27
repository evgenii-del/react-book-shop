import React from 'react';
import { shallow } from 'enzyme';
import * as redux from 'react-redux';
import CartItem from './CartItem';

const useDispatchSpy = jest.spyOn(redux, 'useDispatch');
describe('should render CartItem component', () => {
  const item = {
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
  };
  let component;

  beforeEach(() => {
    useDispatchSpy.mockReturnValue(() => {});
    component = shallow(<CartItem item={item} />);
  });

  it('should contain .cart-item wrapper', () => {
    const wrapper = component.find('.cart-item');
    expect(wrapper.length).toBe(1);
  });

  it('should contain .cart-item wrapper', () => {
    const title = component.find('.cart-item__title').text();
    expect(title).toEqual(item.book.title);
  });
});
