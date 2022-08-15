import React, { useState } from 'react';
import './app.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Results from './components/results/Result';

function App() {
  const [state, setState] = useState({requestParams: {} });
  const[data,setData]= useState('')
  const callApi = (formData) => {
    setState({...state,requestParams:formData});
  }
    return (
      <>
        <Header />
        <div>Request Method: {state.requestParams.method}</div>
        <div>URL: {state.requestParams.url}</div>
        <Form callApi={callApi} setData={setData} />
        <Results data={data} />
        <Footer />
      </>
    );
}

export default App;