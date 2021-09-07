import { configureStore } from '@reduxjs/toolkit'
import createPageReducer from './pages/CreatePageSlice'
import thunk from 'redux-thunk'

export default configureStore({
  reducer: {
    createPage: createPageReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})
