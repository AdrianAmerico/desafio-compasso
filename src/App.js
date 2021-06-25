import React from 'react';
import { githubProvider } from './config/authMethod';
import githubAuth from './service/auth';

function App() {
  const handleOnClick = async (provider) => {
    const res = await githubAuth(provider)
    console.log(res)
  }

  return (
    <div className="App">
      <button onClick={() => handleOnClick(githubProvider)}>Github</button>
    </div>
  );
}

export default App;