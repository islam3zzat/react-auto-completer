import axios from 'axios'

export function fetchApi(options, additionalParams, additionalHeaders){
  // if no search key is passed, append value
  if (!options.searchKey) {
    options.url += `/${options.val}`
  }
  return axios({
    ...options,
    params: {...{[options.searchKey]: options.val} , ...additionalParams},
    data: {...{[options.searchKey]: options.val}, ...additionalParams},
    headers: {...additionalHeaders}
  })
}