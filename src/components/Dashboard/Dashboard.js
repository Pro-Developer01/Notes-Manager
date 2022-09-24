import React, { useState } from 'react'
import AllNotes from '../Pages/AllNotes.js'
import CreateNote from '../Pages/CreateNote.js'
import AddIcon from '@mui/icons-material/Add';

export default function Dashboard({setIndexUpdate}) {
    const [CreateNte, setCreateNte] = useState(true);
    const [AllNote, setAllNote] = useState(false);

    return (
        <div className='container d-flex-column justify-content-center'>
            <div className="btn-group d-flex justify-content-center my-4" style={{width: '100%'}}>
                <div>

                <button className="btn btn-outline-primary mx-3" onClick={() => { setCreateNte(CreateNte ? false : true); setAllNote(false) }}><AddIcon style={{color:'green' ,    fontSize: '23px',
    marginTop: '-4px'}}/>CreateNote</button>
                <button className="btn btn-outline-primary mx-3" onClick={() => { setAllNote(AllNote ? false : true); setCreateNte(false) }} >All Notes</button>
                </div>
            </div>
            <hr />
            <div className="results d-flex justify-content-center">
                {CreateNte && <CreateNote />}
                {AllNote && <AllNotes setIndexUpdate={setIndexUpdate} />}
            </div>
        </div>
    )
}
