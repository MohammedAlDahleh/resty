import React, { useState } from 'react';
// import { Component } from 'react';

import './app.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Results from './components/results/Result';

function App() {

  const [state, setState] = useState({ data: null, requestParams: {}, })
  const callApi = (requestParams) => {
    const data = {
      count: 2,
      results: [
        { name: 'fake thing 1', url: 'http://fakethings.com/1' },
        { name: 'fake thing 2', url: 'http://fakethings.com/2' },
      ],
    };
    setState({ data, requestParams });
  }

  return (
    <>
      <Header />
      <div className='req'>Request Method: {state.requestParams.method}</div>
      <div className='url'>URL: {state.requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={state.data} />
      <Footer />
    </>
  )
}
export default App;