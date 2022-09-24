import React, { useEffect, useState } from 'react'

const getLocalData=()=>{
  const InitialData= localStorage.getItem('Notes');
  if(InitialData){
   return JSON.parse(InitialData);
  }
  else{
  return [];
  }
}
export default function UpdatePage(props) {
    const[Notes,setNotes]=useState(getLocalData());
    const[Author,setAuthor]=useState('');
    const[NotePara,setNotePara]=useState('');
    useEffect(()=>{
      setAuthor(Notes[props.IndexUpdate].Author);
      setNotePara(Notes[props.IndexUpdate].NotePara);
    },[props.IndexUpdate, Notes])
    const submitHandler=(e)=>{
      e.preventDefault();
      const obj={
        Author,
        NotePara
      }

      const UpdatedData=Notes.map((element,i)=>{
        if(i===props.IndexUpdate)
        {
            return (element.Author=obj.Author,
              element.NotePara=obj.NotePara);
        }
        else{
          return null;
        }
      })
      setNotes(UpdatedData);
      console.log('obj',obj);
      console.log('Notes',Notes);
      alert('Note Updated Successfully.');
      localStorage.setItem('Notes',JSON.stringify(Notes));
      // setAuthor('');
      // setNotePara('');
    }
  return (
    <div className='container d-flex justify-content-center' style={{ padding:' 50px 0px'}}>
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
          <input class="btn btn-primary" type="submit" value="Update" />
        </div>
      </form>

    </div>
    </div>
  )
}
