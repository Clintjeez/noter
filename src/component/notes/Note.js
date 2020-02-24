import React from 'react'
import '../notes/Note.css'
const Note = ({ notes, deleteNote }) => {
  const noteList = notes.length ? (
    notes.map(note => {
      return (
        <div className="notes card" key={note.id} onClick={() => { deleteNote(note.id) }}>
          <div className="card-content row">
            <div className="col">
              <h2>{note.date}</h2>
            </div>
            <div className="col">
              <h4>{note.title}</h4>
              <p>{note.content}</p>
            </div>
          </div>
        </div>
      )
    })
  ) : (
      <p>YOu have no notes</p>
    )
  return (
    <div className='note'>
      {noteList}
    </div>
  )
}

export default Note;