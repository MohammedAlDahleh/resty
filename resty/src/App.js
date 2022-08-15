import React, { useState, useEffect } from 'react';
import axios from "axios";
import './app.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Results from './components/results/Result';
function App() {
  const [state, setState] = useState({ requestParams: {} });
  const [data, setData] = useState('')
  const callApi = (formData) => {
    setState({ ...state, requestParams: formData });
  }
  let method = state.requestParams.method;
  useEffect(() => {
    if (method) {
      if (method == 'GET') {
        axios.get(state.requestParams.url)
          .then(res => {
            const persons = res.data;
            setData(persons)
          }).catch((err) => {
            console.log(err);
            setData({ stauts: "loading..." })
          });
      } if (method === 'POST') {
        console.log('POST');
      } if (method === 'PUT') {
        console.log('PUT');
      } if (method === 'DELETE') {
        console.log('DELETE');
      }
    } else {
      console.log("please enter your method");
    }

  }, [method])
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