import React, { useState, useEffect } from "react";
// import axios from 'axios';

import './form.scss';

function Form({ callApi, setData }) {
    const [method, setMethod] = useState({ method: 'GET' });
    const handleSubmit = event => {
        event.preventDefault();
        const formData = {
            method: method,
            url: event.target[0].value,
        };
        callApi(formData);

        // axios.get(event.target[0].value)
        //     .then(res => {
        //         const persons = res.data;
        //         setData(persons)
        //     }).catch((err) => {
        //         console.log(err);
        //         setData({ stauts: "loading..." })
        //     });
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
                {method === 'POST' || method === 'PUT' ? <input name='text' type='text' /> : null}
            </form>
        </>
    );
}

export default Form;