/**
 * 函数柯里化
 * @param {} fn 原函数
 * @param {*} len 函数形参个数 默认函数形参个数
 */
export function curry(fn,len=fn.length) {
  return _curry.call(this,fn,len)
}

function _curry(fn,len,...args) {
  console.log('args',...args);
  return function (...params) {
    let _args = [...params, ...args]
    console.log('_args',_args);
    if (_args.length > len) {
      return fn.apply(this,_args)
    }else{
      return _curry.call(this,fn,len,..._args)
    }
  }
}