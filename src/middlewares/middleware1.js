export default store => next => action => {
  console.log('中间件1，开始运行');
  next(action);
  console.log('中间件1，结束运行');
}
