import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import allReducers from './reducers'

export default function configureStore(preloadedState) {
  return createStore(
      allReducers,
    preloadedState,
    applyMiddleware(
      thunkMiddleware
    )
  )
}
