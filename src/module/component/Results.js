import React from 'react'
import ResultItem from './ResultsItem'
import Results from '../styled/Results'

export default ({options, active, select}) => {
  if (options.length && active) {
    return <Results>
      {
        options.map((option, i) => (
            <ResultItem tabIndex={i+1} select={select} key={`result${i}`} data={option} />
        ))
      }
    </Results>
  }
  return null
}
