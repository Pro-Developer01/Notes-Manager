import React from 'react'
import AllNotes from '../Pages/AllNotes.js'
import CreateNote from '../Pages/CreateNote.js'

export default function Dashboard() {
  return (
    <div>
      <div className="btn-group">
  <a href="/" className="btn btn-outline-primary " aria-current="page">Active link</a>
  <a href="/" className="btn btn-outline-primary">Link</a>
  <a href="/" className="btn btn-outline-primary">Link</a>
</div>
<div className="results">
<CreateNote/>
<AllNotes/>
</div>
    </div>
  )
}
