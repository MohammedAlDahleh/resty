import React from "react";
import './form.scss';
function Form(props) {

    const handleSubmit = e => {
        e.preventDefault();
        const formData = {
            method:e.target[1].value,
            url: e.target[0].value,
        };
        console.log("----------------------", e.target[1].value);
        props.handleApiCall(formData);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label className='label-input'>
                    <span>URL: </span>
                    <input name='url' type='text' className='input' />
                </label>
                <label for="method">Choose a method:</label>

                <select className="methods">
                    <option value="get">get</option>
                    <option value="post">post</option>
                    <option value="update">update</option>
                    <option value="delete">delete</option>
                </select>
                    <button type="submit" className='btn'>GO!</button>
            </form>
        </>
    )
}
export default Form;