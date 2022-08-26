import React, { useState, useEffect,useReducer } from 'react';
import './app.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Form from './components/form/Form';
import Results from './components/results/Result';
function App() {
  const [http, setHttp] = useState({ requestParams: {} });
  const [data, setData] = useState('');
  const[state,dispatch] =useReducer(historyReducer, 0);


  function historyReducer(state,action){
    state = console.log("historyReducer")  ;
  }
  



  const callApi = (formData) => {
    setHttp({ ...http, requestParams: formData });
  }
 
  let method = http.requestParams.method;
  let url = http.requestParams.url
  let body = http.requestParams.body;
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

  }, [http])
  return (
    <>
      <Header />
      <div>Request Method: {http.requestParams.method}</div>
      <div>URL: {http.requestParams.url}</div>
      <Form callApi={callApi} setData={setData}  /> 
      <Results data={data} />
      <div>
        {
          <button onClick={()=>dispatch({historyReducer})}>history</button>
        }
      </div>
      <Footer />
    </>
  );
}
//setBody={setBody}
export default App;