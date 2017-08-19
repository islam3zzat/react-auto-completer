import React from 'react'
import Input from '../styled/Input'

export default ({value, changed, placeholder, active, setActive}) => (
    <Input
        onFocus={()=>{setActive(!active)}}
        className="react-autocomplete__input"
        type="text"
        onChange={(e)=>{changed(e.target.value)}}
        value={value}
        placeholder={placeholder}
    />
)
