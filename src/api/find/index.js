import {get} from '@utils/request'

export function getFindPage(data) {
  const params = {
    data
  }
  return get('/homepage/block/page',params)
}