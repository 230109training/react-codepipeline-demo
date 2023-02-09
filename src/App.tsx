import React, { useEffect }  from 'react';
import axios from 'axios';

function App() {
  useEffect(() => {
    makeTestRequest();
  }, []); // empty array as second argument, so when
  // the component first mounts, the callback function
  // will run -> implies that it will run only once

  async function makeTestRequest() {
    let response = await axios.get('http://3.239.80.24:8080/test');
    console.log(response.data);
  }

  return (
    <h1>Hello from my React App!</h1>
  );
}

export default App;
