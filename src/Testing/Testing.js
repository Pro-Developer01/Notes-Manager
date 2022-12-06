import React from 'react'
const list = ['Jhonh', 'shashank', 'Kiran', 'Anubhav'];
const filtered = list.filter((e)=>{
return (e==='shashank');
})
export default function Testing() {
    return (
        <div>

            {list.map((e, item) => {
                console.log(e,item);
                return(<h1 key={item}>{e}</h1> );
            })}

            { <h2>{filtered}</h2> }
        </div>
    )
}
