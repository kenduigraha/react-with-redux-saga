const initialState = {};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HELLO_WORLD':
      const newDatas = {
        ...state,
        helloWorld: action.payload
      };; // results
      // console.log(newDatas)
      return newDatas;

    case 'GET_IP_ADDRESS':
      console.log('reducer ip')
      console.log(action)
      return {
        ...state,
        ipAddress: action.payload
      }
    default: return state;
  }
};

export default dataReducer;