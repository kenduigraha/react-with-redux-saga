const helloWorld = (results) => {
  return {
    type: 'HELLO_WORLD',
    payload: results,
  };
};

export default helloWorld;