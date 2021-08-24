import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { useHttp } from '../hooks/http.hook'
import { useHistory } from 'react-router-dom'
import { tagPalette } from '../components/TagPalette'

export const CreatePage = () => {
  const history = useHistory()
  const auth = useContext(AuthContext)
  const { request } = useHttp()
  const [note, setNote] = useState('')
  const [tags, setTags] = useState([])

  useEffect(() => {
    window.M.updateTextFields()
  })

  const pressHandler = async (event) => {
    if (event.key === 'Enter') {
      try {
        const data = await request(
          '/api/note/generate',
          'POST',
          { text: note, tags: tags },
          {
            Authorization: 'Bearer ' + auth.token,
          }
        )
        history.push('/detail/' + data.note._id)
      } catch (e) {}
    }
  }

  const changeHandler = async (event) => {
    const noteText = event.target.value
    setTags([])
    setNote(noteText)

    if (noteText.includes('#')) {
      const tags = noteText
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
      setTags(tags)
    }
  }

  return (
    <div className='row'>
      <div className='col s8 offset-s2'>
        <div className='input-field'>
          <input
            placeholder='Заметка'
            id='note'
            type='text'
            value={note}
            onChange={changeHandler}
            onKeyPress={pressHandler}
          />
          <label htmlFor='note'>Введите текст</label>
          <div>
            {tags.map((tag) => {
              return <div className={'chip ' + tag.tagColor}>{tag.tagText}</div>
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
