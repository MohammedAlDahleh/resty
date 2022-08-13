import React from "react";
// import JSONPretty from 'react-json-pretty';

function Result(props) {
  // console.log("*-*-",props.bodyData.body);
  let body = props.bodyData.body;
  let headers = props.headers.headers;
  if (!props.loading) {

    return (
      <>
        <section data-testid='result'>
        <div className="header">
          {props.method === 'GET' ? JSON.stringify(headers, undefined, '\t') : null}
        </div>
        <br/>
          {
            props.method === 'GET'
              ? JSON.stringify(props.data, undefined, '\t')
              : props.method === 'POST'
                ? body
                : props.method === 'PUT'
                  ? body
                  : props.method === 'DELETE'
                    ? 'Deleted'
                    : <div className='loader'></div>}
        </section> </>
    )
  } else {
    return <h3>Loading....</h3 >;
  }
}
export default Result;