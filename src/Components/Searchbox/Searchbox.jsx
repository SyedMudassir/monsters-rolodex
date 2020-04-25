import React from 'react';
import './Searchbox.css'

const Searchbox = ({placeholder,handeChange})=>(
    <input 
        className='search'
        type="search" 
        placeholder={placeholder}
        onChange={handeChange}
    />
)
export default Searchbox;