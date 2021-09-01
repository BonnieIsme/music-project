import {curry} from './curry'

// 校验手机号或邮箱
function handleCheck(reg,number) {
  console.log('reg',reg);
  if (reg.test(number)) {
 
    return true
  }else{
    return false
  }
}

let _check = curry(handleCheck)
export const checkNumber = _check(/^1[0-9]{10}$/)