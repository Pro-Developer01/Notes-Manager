import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";


const getLocalData = () => {
  const InitialData = localStorage.getItem('Notes');
  if (InitialData) {
    return JSON.parse(InitialData);
  }
  else {
    return [];
  }
}
export default function UpdatePage(props) {
  const [Notes, setNotes] = useState(getLocalData());
  const [Author, setAuthor] = useState('');
  const [NotePara, setNotePara] = useState('');
  useEffect(() => {
    setAuthor(Notes.length ? Notes[props.IndexUpdate].Author : null);
    setNotePara(Notes.length ? Notes[props.IndexUpdate].NotePara : null);
  }, [props.IndexUpdate, Notes])
  const submitHandler = (e) => {
    e.preventDefault();
    const obj = {
      Author,
      NotePara
    }

    const UpdatedData = Notes.map((element, i) => {
      if (i === props.IndexUpdate) {
        return (element.Author = obj.Author,
          element.NotePara = obj.NotePara);
      }
      else {
        return null;
      }
    })
    setNotes(UpdatedData);
    console.log('obj', obj);
    console.log('Notes', Notes);
    alert('Note Updated Successfully.');
    localStorage.setItem('Notes', JSON.stringify(Notes));
    // setAuthor('');
    // setNotePara('');
  }
  return (
    <>

    <div className="d-flex-column justify-content-center">
      <div className="btn-group d-flex justify-content-center my-4" style={{ width: '100%' }}>
        <div>
          <Link to={'/'} > <button className="btn btn-outline-primary mx-3" >Dashboard</button></Link>
        </div>
      </div>
      <hr />
    </div>
    <div className='container d-flex justify-content-center' style={{ padding: ' 0px 0px' }}>      
      <div className='Media'  style={{width: '49%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center', }}>
        <h2>Update Your Notes</h2>
        <form style={{    width: '100%'}} onSubmit={submitHandler}>
          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Author Name</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" value={Author} onChange={(e) => setAuthor(e.target.value)} placeholder="Binod" />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">Note</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" value={NotePara} onChange={(e) => setNotePara(e.target.value)} rows="10" placeholder='Create Your Story....'></textarea>
          </div>
          <div className="mb-3">
            <input class="btn btn-primary" type="submit" value="Update" />
          </div>
        </form>

      </div>
    </div>
    </>
  )
}
