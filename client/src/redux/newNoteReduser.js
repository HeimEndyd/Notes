import { CHANGE_TEXT } from './types'

const initialState = {
  note: '',
  tags: [],
}

export const newNoteReduser = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_TEXT:
      return { ...state, note: payload }
    default:
      return state
  }
}
