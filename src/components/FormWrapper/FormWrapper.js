import React from 'react';

const Form = ({submitFunc}) => (
    <form onSubmit={submitFunc}>
        <input name="name" type="text" placeholder="name"/>
        <input name="link" type="text" placeholder="link"/>
        <input name="image" type="text" placeholder="image"/>
        <textarea name="description" placeholder="description"/>
        <button type="submit">add new person</button>
    </form>
);

export default Form;