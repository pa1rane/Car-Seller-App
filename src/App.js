import React from 'react';
import data from "../src/data/data.json";
import Card from './components/Card';

const App = () => {
  return (
    <>
      <Card data={data}/>
    </>
  )
}

export default App
