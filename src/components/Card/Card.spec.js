import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

describe('should render Card component', () => {
  const book = {
    id: 1,
    price: 20,
    author: 'Author',
    title: 'Title',
  };
  let component;

  beforeEach(() => {
    component = shallow(<Card book={book} />);
  });

  it('should contain .card wrapper', () => {
    const wrapper = component.find('.card');
    expect(wrapper.length).toBe(1);
  });

  it('should contain title', () => {
    const title = component.find('.card__title');
    expect(title.text()).toBe(book.title);
  });
});
