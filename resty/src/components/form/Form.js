import React, { useState } from "react";
// import axios from 'axios';

import './form.scss';

function Form({ callApi, setData }) {
    const [method, setMethod] = useState({ method: 'GET' });
    const [body,setBody]=useState('');
    const handleSubmit = event => {
        event.preventDefault();
        const formData = {
            method: method,
            url: event.target[0].value,
            body: body,

        };
        callApi(formData);
    }
    function updateBody(e){
        setBody(e.target.value)
      }
   

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label >
                    <span>URL: </span>
                    <input name='url' type='text' />
                    <button type="submit">GO!</button>
                </label>
                <label className="methods">
                    <span onClick={() => setMethod('GET')} id="get">GET</span>
                    <span onClick={() => setMethod('POST')} id="post">POST</span>
                    <span onClick={() => setMethod('PUT')} id="put">PUT</span>
                    <span onClick={() => setMethod('DELETE')} id="delete">DELETE</span>
                </label>
                {method === 'POST' || method === 'PUT' ? <input onInput={updateBody} name='text' type='text' /> : null}
            </form>
        </>
    );
}

export default Form;