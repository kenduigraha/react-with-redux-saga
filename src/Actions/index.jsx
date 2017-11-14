const helloAction = (results) => {
  return {
    type: 'HELLO_WORLD',
    payload: results,
  };
};

const getIPAddressToReducer = (result) => {
  console.log(result)
  return {
    type: 'GET_IP_ADDRESS',
    payload: result
  }
}

const getIPAddress = () => {
  // return {
  //   type: 'GET_IP_ADDRESS',
  //   payload: 'https://httpbin.org/ip'
  // } 
  return dispatch => {
    var fetchData = fetch('https://httpbin.org/ip')
        .then(function(response) {
            // console.log(response)
            return response.json();
        })
        .then(function(response) {
            // console.log(response);
            return dispatch(getIPAddressToReducer(response.origin))
        })
        .catch(function(err) {
            console.log(err);
        });

      console.log('fetch Data')
      return fetchData;
  }
  // return getIPAddressToReducer('lol');
}

module.exports = {
  helloAction,
  getIPAddress
};