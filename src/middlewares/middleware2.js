export default store => next => action => {
  console.log('中间件2，开始运行');
  next(action);
  console.log('中间件2，结束运行');
}
