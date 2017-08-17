import React from 'react'
import Input from '../styled/Input'

export default (props) => (
    <Input
        className="react-autocomplete__input"
        type="text"
        placeholder={props.placeholder}
    />
)
