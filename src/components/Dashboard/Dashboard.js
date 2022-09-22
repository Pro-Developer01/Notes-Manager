import React, { useState } from 'react'
import AllNotes from '../Pages/AllNotes.js'
import CreateNote from '../Pages/CreateNote.js'

export default function Dashboard() {
    const [CreateNte, setCreateNte] = useState(true);
    const [AllNote, setAllNote] = useState(false);
    return (
        <div className='container d-flex-column justify-content-center'>
            <div className="btn-group d-flex justify-content-center my-4" style={{width: '100%'}}>
                <div>

                <button className="btn btn-outline-primary mx-3" onClick={() => { setCreateNte(CreateNte ? false : true); setAllNote(false) }}>CreateNote</button>
                <button className="btn btn-outline-primary mx-3" onClick={() => { setAllNote(AllNote ? false : true); setCreateNte(false) }} >AllNotes</button>
                </div>
            </div>
            <hr />
            <div className="results d-flex justify-content-center">
                {CreateNte && <CreateNote />}
                {AllNote && <AllNotes />}
            </div>
        </div>
    )
}
