const initialState = {
  data: {}
};

const responseDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return {...state, data: action.payload}
    default:
      return state
  }
};

export default responseDataReducer;
