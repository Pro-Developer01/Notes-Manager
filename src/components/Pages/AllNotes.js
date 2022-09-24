import React, { useEffect, useState } from 'react'
import {Link  } from "react-router-dom";


const getLocalData=()=>{
    const InitialData= localStorage.getItem('Notes');
    if(InitialData){
     return JSON.parse(InitialData);
    }
    else{
    return [];
    }
  }

export default function AllNotes({setIndexUpdate}) {
    const[Index,setIndex]=useState(0);
    const[data,setdata]=useState(getLocalData());
    useEffect(()=>{
        setIndexUpdate(Index);
    },[Index,setIndexUpdate])
    console.log('index',Index);
    console.log('data',data);
    console.log('data zero',data[Index]);
    return (
        <div style={{
            height: '74vh',
            background: '#f9f0f0bd',
            overflow: 'auto',
            width: '40%'

        }}>
            <div className="list-group">
                {data.map((e,i)=>{
                    return(
                        <>
                        <button href="/" className="list-group-item list-group-item-action " data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={()=>setIndex(i)} aria-current="true">
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
                            <h5 className="modal-title" id="exampleModalLabel">{data?data[Index].Author:null}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                        {data?data[Index].NotePara:null}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <Link to={'/update'}><button type="button" className="btn btn-primary" data-bs-dismiss="modal" >Update Note</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
