import { createSlice } from '@reduxjs/toolkit'
import { tagPalette } from '../components/TagPalette'

const initialState = {
  note: '',
  tags: [],
}

export const counterSlice = createSlice({
  name: 'createPage',
  initialState,
  reducers: {
    setNote: (state, { payload }) => {
      state.note = payload
      state.tags = []
      if (payload.includes('#')) {
        state.tags = payload
          .split('#')
          .slice(1)
          .map((tag) => tag.split(' ')[0])
          //Убираем пустые теги
          .filter((possibleTag) => possibleTag !== '')
          //Убираем дубли
          .filter((v, i, a) => a.indexOf(v) === i)
          .map((tag, index) => {
            return {
              tagText: tag,
              tagColor: tagPalette.Color(index),
            }
          })
      }
    },
  },
})

export const { setNote } = counterSlice.actions

export default counterSlice.reducer
