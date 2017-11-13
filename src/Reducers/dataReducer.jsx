const initialState = [];

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HELLO_WORLD': {
      const newDatas = action.payload; // results
      return newDatas;
    }
    default: return state;
  }
};

export default dataReducer;