import React from 'react';
import { shallow } from 'enzyme';
import * as redux from 'react-redux';

import Detail from '../Detail';

const useSelectorSpy = jest.spyOn(redux, 'useSelector');
const useDispatchSpy = jest.spyOn(redux, 'useDispatch');

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn().mockReturnValue({ id: '1' }),
}));

describe('should render Detail component', () => {
  let component;

  beforeEach(() => {
    useSelectorSpy.mockReturnValue({
      books: {
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
        error: null,
      },
      cart: {
        books: [
          {
            book: {
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
            totalCount: 1,
            totalPrice: 36.54,
          },
        ],
        totalCount: 1,
        totalPrice: 36.54,
      },
    });
    useDispatchSpy.mockReturnValue(() => {});
    component = shallow(<Detail />);
  });

  it('should contain .container wrapper', () => {
    const wrapper = component.find('.detail');
    expect(wrapper.length).toBe(1);
  });
});
