import React from 'react'
import Input from '../styled/Input'

export default ({value, changed, placeholder}) => (
    <Input
        className="react-autocomplete__input"
        type="text"
        onChange={(e)=>{changed(e.target.value)}}
        value={value}
        placeholder={placeholder}
    />
)
