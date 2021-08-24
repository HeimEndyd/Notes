import React from 'react'

export const NoteCard = ({ note }) => {
  return (
    <>
      <div className='row'>
        <div className='col s12'>
          <div className='card-panel teal'>
            <span className='white-text'>{note.text}</span>
          </div>
        </div>
      </div>
    </>
  )
}
