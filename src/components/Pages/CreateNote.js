import React from 'react'

export default function CreateNote() {
  return (
    <div style={{    width: '33%'}}>
      <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Author Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Binod" />
</div>
<div className="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label">Note</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" placeholder='Create Your Story....'></textarea>
</div>
<div className="mb-3">
<input class="btn btn-primary" type="submit" value="Submit"/>

</div>
    </div>
  )
}
