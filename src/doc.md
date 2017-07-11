[store => next => action => next(action), store => next => action => next(action)] --> [f1, g1]
|
middlewares.map(middleware => middleware(middlewareAPI))
|
[next => action => next(action), next => action => next(action)]                   --> [f2, g2]
|
compose(...chain)
|
next => f2(g2(next))                                                               --> h
|
dispatch(新) = h(store.dispatch)
|
新dispatch的执行顺序：f3 - g3 - store.dispatch - g3 - h3
