import axios from 'axios'

let cancel;
export function fetchApi(options, additionalParams, additionalHeaders){
  // if no search key is passed, append value
  if (!options.searchKey) {
    options.url += `/${options.val}`
  }
  if (cancel) {
    cancel();
  }
  return axios({
    ...options,
    params: {...{[options.searchKey]: options.val} , ...additionalParams},
    data: {...{[options.searchKey]: options.val}, ...additionalParams},
    headers: {...additionalHeaders},
    cancelToken: new axios.CancelToken(function executor(c) {
      cancel = c;
    })
  })
}