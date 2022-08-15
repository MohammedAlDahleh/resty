import './app.scss';
import React, { useState } from 'react';
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
    // console.log("data",data);
    // console.log("res",response);
    setData(data);
    setReqParams(reqParams);
    const body = {body: bodyParams.body,};
    // console.log("bodyyyyy",bodyParams.body)
    const headers = {headers: reqParams.headers,};
    // console.log("header",reqParams.headers)
    setBodyData(body);
    setHeaders(headers);
  }

  return (
    <>
      <Header />
      <div className='url'>URL: {reqParams.url}</div>
      <div className='req'>Request Method: {reqParams.method}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} method={reqParams.method} bodyData={bodyData} headers={headers}/>
      <Footer />
    </>
  )
}
export default App;