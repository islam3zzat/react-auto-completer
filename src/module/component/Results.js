import React from 'react'
import ResultItem from './ResultsItem'
import Results from '../styled/Results'

export default ({list}) => {
  if (list.length) {
    return <Results>
      {
        list.map((listItem, i) => (
            <ResultItem key={`result${i}`} data={listItem} />
        ))
      }
    </Results>
  }
  return null
}
