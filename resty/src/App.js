import React, { useState, useEffect,useReducer } from 'react';
import axios from "axios";
import './app.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Results from './components/results/Result';
function App() {
  const [state, setState] = useState({ requestParams: {} });
  const [data, setData] = useState('');
  const[statee,dispatch] =useReducer(historyReducer, initialState);

  const callApi = (formData) => {
    setState({ ...state, requestParams: formData });
  }
 
  let method = state.requestParams.method;
  let url = state.requestParams.url
  let body = state.requestParams.body;
  useEffect(() => {
    if (method) {
      //////////////////////Get/////////////
      if (method === 'GET') {
        axios.get(url)
        .then(res => {
          // console.log(res.data.length);
          const persons = {
            header: res.headers,
            data:res.data,
            count:res.data.length,
          };
            setData(persons)
          }).catch((err) => {
            console.log(err);
            setData({ stauts: "loading..." })
          });

          ///////////////////////Post///////////////////////
      } if (method === 'POST') {
       
        
      } if (method === 'PUT') {
        axios.put(url,body)
        .then(res =>  {
          const persons = {
            header: res.headers,
            count: 1,
            data:res.data
          }
          setData(persons)
          })
          .catch((e) => {
            console.log(e);
            setData({stauts:"loading..."})
          });
      } if (method === 'DELETE') {
        console.log('DELETE');
      }
    } else {
      console.log("please enter your method");
    }

  }, [state])
  return (
    <>
      <Header />
      <div>Request Method: {state.requestParams.method}</div>
      <div>URL: {state.requestParams.url}</div>
      <Form callApi={callApi} setData={setData}  /> 
      <Results data={data} />
      <Footer />
    </>
  );
}
//setBody={setBody}
export default App;