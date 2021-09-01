import {get} from '../../utils/request'

export default {
  // 手机登录
  loginByPhone({phone,password}){
    return get({url:`/login/cellphone?phone=${phone}&password=${password}`})
  },
  // loginByEmail({email,password}) {
  //   //   const params = {
  //   //     email,
  //   //     password
  //   //   }
  //   //   return get('/login',params)
}