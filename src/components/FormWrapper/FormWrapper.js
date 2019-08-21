import React from 'react';
import './FormWrapper.css';

const FormWrapper = ({submitFunc}) => (
    <div className="formWrapper">
        <h2>Add new favourite person</h2>
        <form className="formWrapper__form" onSubmit={submitFunc}>
            <div className="formWrapper__item">
                <input type="text" name="name" placeholder=" " id="name"/>
                <label htmlFor="name">Name</label>
                <div className="formWrapper__item__bar"/>
            </div>
            <div className="formWrapper__item">
                <input type="text" name="link" placeholder=" " id="link"/>
                <label htmlFor="link">Link</label>
                <div className="formWrapper__item__bar"/>
            </div>
            <div className="formWrapper__item">
                <input type="text" name="image" placeholder=" " id="image"/>
                <label htmlFor="image">Image</label>
                <div className="formWrapper__item__bar"/>
            </div>
            <div className="formWrapper__item">
                <textarea name="description" placeholder=" " id="description"/>
                <label htmlFor="description">Description</label>
                <div className="formWrapper__item__bar"/>
            </div>
            <button type="submit" className="formWrapper__button">add new person</button>
        </form>
    </div>
);

export default FormWrapper;