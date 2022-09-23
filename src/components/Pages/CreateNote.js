import React, { useEffect, useState } from 'react'

const getLocalData=()=>{
  const InitialData= localStorage.getItem('Notes');
  console.log('InitialData',InitialData);
  if(InitialData){
   return JSON.parse(InitialData);
  }
  else{
  return [];
  }
}
// const InitialData={}

export default function CreateNote() {
  const[Notes,setNotes]=useState(getLocalData());
  const[Author,setAuthor]=useState('');
  const[NotePara,setNotePara]=useState('');
  const submitHandler=(e)=>{
    e.preventDefault();
    const obj={
      Author,
      NotePara
    }

    setNotes([...Notes, obj]);
    console.log('obj',obj);
    console.log('Notes',Notes);
    alert('Note Saved Successfully.');
    setAuthor('');
    setNotePara('');
  }
  useEffect(()=>{
    localStorage.setItem('Notes',JSON.stringify(Notes));
  },[Notes])
  return (
    <div style={{ width: '33%' }}>
      <form onSubmit={submitHandler}>
        <div className="mb-3">
          <label for="exampleFormControlInput1" className="form-label">Author Name</label>
          <input type="text" className="form-control" id="exampleFormControlInput1" value={Author} onChange={(e)=>setAuthor(e.target.value)} placeholder="Binod" />
        </div>
        <div className="mb-3">
          <label for="exampleFormControlTextarea1" className="form-label">Note</label>
          <textarea className="form-control" id="exampleFormControlTextarea1" value={NotePara} onChange={(e)=>setNotePara(e.target.value)} rows="10" placeholder='Create Your Story....'></textarea>
        </div>
        <div className="mb-3">
          <input class="btn btn-primary" type="submit" value="Submit" />
        </div>
      </form>

    </div>
  )
}
