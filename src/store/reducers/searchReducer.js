const initialState = {
  searchText: '',
  activePage: 1,
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_TEXT':
      return {...state, searchText: action.payload, activePage: 1};
    case 'UPDATE_PAGINATE':
      return {...state, activePage: action.payload}
    default:
      return state;
  }
};

export  default searchReducer;
