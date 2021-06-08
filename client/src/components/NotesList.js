import React from 'react'
import { Link } from 'react-router-dom'

export const NotesList = ({ notes }) => {
  if (!notes.length) {
    return <p className='center'>Заметок нет</p>
  }

  return (
    <table>
      <thead>
        <tr>
          <th>№</th>
          <th>Текст</th>
          <th>Открыть</th>
        </tr>
      </thead>

      <tbody>
        {notes.map((note, index) => {
          return (
            <tr key={note._id}>
              <td>{index + 1}</td>
              <td>{note.text}</td>
              <td>
                <Link to={`/detail/${note._id}`}>Открыть</Link>
              </td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
