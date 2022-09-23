import React, { useState } from 'react'

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

export default function AllNotes({setGetData}) {
    const[Index,setIndex]=useState();
    const[data,setdata]=useState(getLocalData());
    console.log('index',Index);
    return (
        <div style={{
            height: '74vh',
            background: '#f9f0f0bd',
            overflow: 'auto',
            width: '40%'

        }}>
            <div className="list-group">
                {data.map((e)=>{
                    return(
                        <>
                        <button href="/" className="list-group-item list-group-item-action " data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>setIndex(e)} aria-current="true">
                <div className="d-flex w-100 justify-content-between" >
                        <h5 className="mb-1">{e.Author}</h5>
                        {/* <small>3 days ago</small> */}
                    </div>
                    <p className="mb-1">{e.NotePara}</p>
                    {/* <small>And some small print.</small> */}
                </button>
                        </>
                    );
                })}
                
               
            </div>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{Index?Index.Author:null}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        {Index?Index.NotePara:null}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Update Note</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
