import React from 'react'
import ResultItem from './ResultsItem'
import Results from '../styled/Results'

export default ({options}) => {
  if (options.length) {
    return <Results>
      {
        options.map((option, i) => (
            <ResultItem key={`result${i}`} data={option} />
        ))
      }
    </Results>
  }
  return null
}
