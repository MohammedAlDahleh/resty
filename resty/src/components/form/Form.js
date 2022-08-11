import React from "react";
import './form.scss';
function Form(props) {

    const handleSubmit = e => {
        e.preventDefault();
        const formData = {
            method: e.target[1].value,
            url: e.target[0].value
        };
        props.handleApiCall(formData);
    }

    return ( <> <form onSubmit={handleSubmit}>
        <label className='label-input'>
            <span>URL:
            </span>
            <input name='url' type='text' className='input'/>
        </label>
        <label className="methods">Choose a method:</label>

        <select className="methods">
            <option value="get">Get</option>
            <option value="post">Post</option>
            <option value="update">Update</option>
            <option value="delete">Delete</option>
        </select>
        <button type="submit" className='btn'>GO!</button>
    </form> </>
    )
}
export default Form;