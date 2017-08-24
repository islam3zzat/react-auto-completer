import React from 'react'
import Input from '../styled/Input'

export default ({value, changed, placeholder, active, setActive}) => (
  <Input
    onFocus={()=>{setActive(true)}}
    className="react-autocomplete__input"
    type="text"
    tabIndex={-1}
    onChange={(e)=>{changed(e.target.value)}}
    onKeyDown={(e)=>{
      if(e.key === 'ArrowDown'){
        e.preventDefault()
        if(e.target.nextElementSibling && e.target.nextElementSibling.firstChild){
          e.target.nextElementSibling.firstChild.focus()
        }
      }
    }}
    value={value}
    placeholder={placeholder}
  />
)
