import React from 'react'
import ResultItem from '../styled/ResultsItem'

export default ({data, select}) => {
  return <ResultItem onClick={()=>{select(data)}}>{data}</ResultItem>
}
