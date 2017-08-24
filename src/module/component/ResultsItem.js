import React from 'react'
import ResultItem from '../styled/ResultsItem'

export default ({data, select, tabIndex}) => {
  return <ResultItem  onKeyPress={(e)=>{if(e.key === 'Enter') select(data)}}  tabIndex={tabIndex} onClick={()=>{select(data)}}>{data}</ResultItem>
}
