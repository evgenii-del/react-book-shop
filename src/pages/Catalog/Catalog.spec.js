import React from 'react';
import { shallow } from 'enzyme';
import * as redux from 'react-redux';

import Catalog from './Catalog';

const useSelectorSpy = jest.spyOn(redux, 'useSelector');
const useDispatchSpy = jest.spyOn(redux, 'useDispatch');

describe('should render Catalog component', () => {
  let component;

  beforeEach(() => {
    useSelectorSpy.mockReturnValue({
      data: [
        {
          id: '1',
          title: 'Apuntes de Javascript I - Nivel Intermedio',
          author: 'JuanMa Garrido',
          level: 'Intermediate',
          description:
            '(En Castellano) Revision de conceptos (actuales) de javascript desde basicos hasta un nivel intermedio',
          cover: 'https://jsbooks.revolunet.com/img/cover-apuntes-javascript-intermedio.png',
          tags: ['core'],
          price: 36.54,
          count: 3,
        },
        {
          id: '2',
          title: 'Apuntes de Javascript I - Nivel Avanzado',
          author: 'JuanMa Garrido',
          description: '(En Castellano) Revision de conceptos (actuales) de javascript avanzados',
          level: 'Advanced',
          cover: 'https://jsbooks.revolunet.com/img/cover-apuntes-javascript-avanzado.png',
          tags: ['core'],
          price: 38.91,
          count: 11,
        },
      ],
      isLoading: false,
      token: 'a7eb2vca1udkmkjy80k97p',
    });
    useDispatchSpy.mockReturnValue(() => {});
    component = shallow(<Catalog />);
  });

  it('should contain .container wrapper', () => {
    const wrapper = component.find('.container');
    expect(wrapper.length).toBe(1);
  });
});
