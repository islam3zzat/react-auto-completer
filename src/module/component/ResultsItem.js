import React from 'react'
import ResultItem from '../styled/ResultsItem'

export default ({data, select, tabIndex}) => {
  return <ResultItem tabIndex={tabIndex} onClick={()=>{select(data)}}>{data}</ResultItem>
}
