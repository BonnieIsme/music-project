import {get} from '../../utils/request'

// 手机登录
export function loginByPhone({phone,password}){
  const params = {
    phone,
    password
  }
  return get('/login/cellphone',params)
}

// 邮箱登录
export function loginByEmail({email,password}) {
  const params = {
    email,
    password
  }
  return get('/login',params)
  
}