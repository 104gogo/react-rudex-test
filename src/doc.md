[store => next => action => next(action), store => next => action => next(action)] -> [f1, g1]
|
middlewares.map(middleware => middleware(middlewareAPI))
|
[next => action => next(action), next => action => next(action)] -> [f2, g2]
|
compose(...chain)
|
next => f2(g2(next))
|
compose(...chain)(dispatch)
|
dispatch(新) = action => f3 -> g3 -> store.dispatch(action) -> g3 -> f3
