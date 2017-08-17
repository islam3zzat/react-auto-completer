import React from 'react'

export default ({list}) => {
  if (list.length) {
    return <ul className="react-autocomplete__list">
      {
        list.map((listItem, i) => (
            <li className="react-autocomplete__result-item" key={`result${i}`}>{listItem}</li>
        ))
      }
    </ul>
  }
  
  return null
}