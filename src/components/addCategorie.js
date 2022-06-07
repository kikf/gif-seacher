import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategorie = ({ setCategories }) => {

    const [InputValue, setInputValue] = useState('')

    const addHandle = (e) => {
        setInputValue(e.target.value)
    }

    const addSubmit = (e) => {
        e.preventDefault();

        setCategories( cats => [ InputValue, ...cats])

        setInputValue('')
    }
  return (
    <>
    <form onSubmit={addSubmit}>
        <input
        
        type="text" 
        value={InputValue}
        onChange={addHandle}/>
    </form>
    </>
  )
}

AddCategorie.propTypes = {
  setCategories: PropTypes.func.isRequired
}