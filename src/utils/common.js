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

// 将大数转为 万， 亿
export function formatNumber(num) {
	num = Number(num);
	if (num == 0) {
		return num + '';
	} else
	if (num > 1 && num < 10000) {
		return num + '';
	} else if( num < 100000000 ) {
		return Math.round(num / 10000) + '万';
	} else {
    return Math.round( num / 100000000 ) + '亿'
  }
}
