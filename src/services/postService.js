import * as tokenService from './tokenService'
const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/posts`

function create(post){
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Authorization' : `Bearer ${tokenService.getToken()}`
    },
    body: post
  })
  .then(res => res.json)
}

function getAll(){
  return fetch(BASE_URL, {
    headers: {
      'Authorization' : `Bearer ${tokenService.getToken()}`
    },
  })
  .then(res => res.json)
}

export {
  create,
  getAll
}
