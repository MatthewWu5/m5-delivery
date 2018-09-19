import { createStore, applyMiddleware } from 'redux'
import reducers from '@/redux/reducers'
import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerMiddleware } from 'react-router-redux'
import history from './history'

const middleware = composeWithDevTools(
  applyMiddleware(promise(), thunk, routerMiddleware(history))
)

export default createStore(reducers, middleware)
