import React from 'react'
import { Link } from 'react-router-dom'

function toSeqentalArrays(array, num) {
  const result = []
  for (let i = 0; i < array.length; i++) {
    if (i % num === 0) {
      result.push(array.slice(i, i + num))
    }
  }
  return result
}

export const NotesList = ({ notes }) => {
  if (!notes.length) {
    return <p className='center'>Заметок нет</p>
  }

  notes.forEach((note, index) => {
    note.index = index
    note.draw = function () {
      return (
        <div className='col s12 m6 l3'>
          <div className='card blue-grey darken-2' key={this._id}>
            <div className='card-content white-text'>
              <blockquote>{this.index}</blockquote>
              <blockquote>{this.text}</blockquote>
            </div>
            <div className='card-action'>
              <Link to={`/detail/${this._id}`}>Открыть</Link>
            </div>
          </div>
        </div>
      )
    }
  })

  const slicedNotes = toSeqentalArrays(notes, 4)

  return (
    <>
      {slicedNotes.map((noteRow, index) => {
        return (
          <div className='row'>
            {noteRow.map((note) => {
              return note.draw()
            })}
          </div>
        )
      })}
    </>
  )
}
