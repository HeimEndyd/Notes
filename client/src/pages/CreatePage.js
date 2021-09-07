import React, { useEffect, useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'
import { useHistory } from 'react-router-dom'
import { setNote } from './CreatePageSlice'

export const CreatePage = () => {
  const history = useHistory()
  const auth = useContext(AuthContext)
  const { request } = useHttp()

  const dispatch = useDispatch()

  const createPage = useSelector((state) => state.createPage)

  useEffect(() => {
    window.M.updateTextFields()
  })

  const changeInputHandler = ({ target }) => {
    dispatch(setNote(target.value))
  }

  const pressHandler = async (event) => {
    if (event.key === 'Enter') {
      try {
        const data = await request(
          '/api/note/generate',
          'POST',
          { ...createPage },
          {
            Authorization: 'Bearer ' + auth.token,
          }
        )
        history.push('/detail/' + data.note._id)
      } catch (e) {}
    }
  }

  return (
    <div className='row'>
      <div className='col s8 offset-s2'>
        <div className='input-field'>
          <input
            name='note'
            type='text'
            placeholder='Заметка'
            value={createPage.text}
            onChange={changeInputHandler}
            onKeyPress={pressHandler}
          />
          <label htmlFor='note'>Введите текст</label>
          <div>
            {createPage.tags.map(({ tagText, tagColor }) => {
              return (
                <div className={'chip ' + tagColor} key={tagText}>
                  {tagText}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
