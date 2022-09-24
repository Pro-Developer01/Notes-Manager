import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import DeleteIcon from '@mui/icons-material/Delete';


const getLocalData = () => {
    const InitialData = localStorage.getItem('Notes');
    if (InitialData) {
        return JSON.parse(InitialData);
    }
    else if (InitialData === null) {
        return [];
    }
}

export default function AllNotes({ setIndexUpdate }) {
    const [Index, setIndex] = useState(0);
    const [SearchText, setSearchText] = useState('');
    const [data, setdata] = useState(getLocalData());
    useEffect(() => {
        setIndexUpdate(Index);
    }, [Index, setIndexUpdate])

    const deleteHandler = (id) => {
        console.log('chal raha h', id);
        const newData = data.filter((element, Ind) => {
            if (id !== Ind) {
                return element;
            }
        })

        setdata(newData);
        console.log('chal raha h', newData);
    }

    const searchHandler=(e)=>{
       setSearchText(e.target.value);
      
    }

    const Searched = data.filter((e)=>{
        return ((e.Author.toLowerCase()).includes(SearchText.toLowerCase()) || (e.NotePara.toLowerCase()).includes(SearchText.toLowerCase()) );
       })
    console.log('data', data);
    console.log('data zero', data[Index]);
    return (

        <div style={{
            height: '74vh',
            background: '#f9f0f0bd',
            overflow: 'auto',
            width: '40%'

        }}>
            <div className="search-Bar">
                <div class="form-outline">
                    <input type="search" id="form1" class="form-control" onChange={searchHandler} placeholder='Search Notes....' />
                </div>
            </div>
            <div className="list-group">
                {Searched && Searched.map((e, i) => {
                    return (
                        <>
                            <button href="/" className="list-group-item list-group-item-action " data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => setIndex(i)} aria-current="true">
                                <div className="d-flex w-100 justify-content-between" >
                                    <h5 className="mb-1">{e.Author}</h5>
                                    {/* <small>3 days ago</small> */}
                                </div>
                                <p className="mb-1">{e.NotePara}</p>
                                {/* <small>And some small print.</small> */}
                            </button>
                            <div className="icon" style={{
                                position: 'relative', marginLeft: '230px',
                                marginTop: '-27px',
                                zIndex: '99'
                            }} onClick={() => deleteHandler(i)}>
                                <DeleteIcon style={{
                                    color: 'red'
                                }} />
                            </div>
                        </>
                    );
                })}


            </div>

            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{data.length > 0 ? data[Index].Author : null}</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {data.length > 0 ? data[Index].NotePara : null}
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
