import {get} from '../../utils/request'

// 手机登录
export function loginByPhone({phone,password}){
  const data = {
    phone,
    password
  }
  return get({url:`/login/cellphone?phone=${phone}&password=${password}`})
}

// 邮箱登录
export function loginByEmail({email,password}) {
  const params = {
    email,
    password
  }
  return get('/login',params)
  
}