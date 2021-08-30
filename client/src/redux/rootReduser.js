import { combineReducers } from 'redux'
import { newNoteReduser } from './newNoteReduser'

export const rootReduser = combineReducers({ newNoteReduser })
