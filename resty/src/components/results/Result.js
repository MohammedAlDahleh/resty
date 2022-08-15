import React from "react";
import JSONPretty from "react-json-pretty";
function Result(props) {
    return (
      <>
      <JSONPretty id = "json-prety" data={props.data}></JSONPretty>
      </>
    )
}
export default Result;