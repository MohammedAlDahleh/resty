import React, { useState } from 'react';
import './app.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Results from './components/results/Result';

    
function App() {
  const [data, setData] = useState(null);
  const [reqParams, setReqParams] = useState({});
  const [bodyData, setBodyData] = useState({});
  const [headers, setHeaders] = useState({});

  const callApi = async (reqParams, bodyParams) => {
    const response = await fetch(reqParams.url);
    const data = await response.json();
    setData(data);
    setReqParams(reqParams);
    const body = {
      body: bodyParams.body,
    };
    const headers = {
      headers: reqParams.headers,
    };
    console.log('headers', headers);
    setBodyData(body);
    setHeaders(headers);
  }
  return (
    <>
      <Header />
      <div >URL: {reqParams.url}</div>
      <div >Request Method: {reqParams.method}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} method={reqParams.method} bodyData={bodyData} headers={headers} />
      <Footer />
    </>
  )
}

export default App