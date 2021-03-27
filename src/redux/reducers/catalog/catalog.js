import {
  GET_BOOKS_FAILURE,
  GET_BOOKS_STARTED,
  GET_BOOKS_SUCCESS,
} from '../../actions/catalog/catalog';

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const catalogReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case GET_BOOKS_SUCCESS:
      return {
        data: action.payload,
        isLoading: false,
        error: null,
      };
    case GET_BOOKS_FAILURE:
      return {
        data: [],
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default catalogReducer;
