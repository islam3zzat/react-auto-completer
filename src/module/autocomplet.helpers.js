import axios from 'axios'

export function fetchApi(options){
  return axios({
    ...options,
    params: {[options.searchKey]: options.val},
    data: {[options.searchKey]: options.val}
  })
}