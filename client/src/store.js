import { configureStore } from '@reduxjs/toolkit'
import createPageReducer from './pages/CreatePageSlice'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { rootReduser } from './redux/rootReduser'
import { applyMiddleware, createStore } from 'redux'

export default configureStore({
  reducer: {
    createPage: createPageReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})
