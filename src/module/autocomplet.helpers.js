import axios from 'axios'

export function fetchApi(options){
  // if no search key is passed, append value
  if (!options.searchKey) {
    options.url += `/${options.val}`
  }
  return axios({
    ...options,
    params: {[options.searchKey]: options.val},
    data: {[options.searchKey]: options.val}
  })
}