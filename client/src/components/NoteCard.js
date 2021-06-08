import React from 'react'

export const NoteCard = ({ note }) => {
  return (
    <>
      <h2>Заметка</h2>

      <p>{note.text}</p>
      <p>
        Дата: <strong>{new Date(note.date).toLocaleDateString()}</strong>
      </p>
    </>
  )
}
