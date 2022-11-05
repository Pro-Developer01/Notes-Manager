import React from 'react'
import './BlackBox.css';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import { useState } from 'react';

const list={
    FoodValue: 10,
    ShoppingValue: 40,
    MoviesValue: 33,
    }


export default function BlackBox() {
    
  return (
    <div>
        <center>
            
       
      <div className="parentContainer">
        <div className="HeaderDiv">
            <span>Your total spend</span>
            <select name="timeframe" id="timeframe1">
                <option value="Day">This Day</option>
                <option value="Week">This Week</option>
                <option value="Month">This Month</option>
            </select>
            <div className="selectLine"></div>
            {/* <KeyboardArrowDownIcon/> */}
            {/* <KeyboardArrowUpIcon/> */}

        </div>
        <div className="SarDiv">
            <span className='sar1'>SAR</span>
            <span className='sar2'>{list.FoodValue+list.ShoppingValue+list.MoviesValue}</span>
        </div>
        <div className="progressDiv">
            <div className="food" style={{width:`${list.FoodValue}%`}}></div>
            <div className="Shopping" style={{width:`${list.ShoppingValue}%`}}></div>
            <div className="Movies" style={{width:`${list.MoviesValue}%`}}></div>
        </div>
        <div className="ItemsDiv">
            <div className="item1" >
           <div className="circle1" ></div>
           <span>Food</span>
            </div>
            <div className="item2">
           <div className="circle2"></div>
           <span>Shopping</span>
            </div>
            <div className="item3">
           <div className="circle3"></div>
           <span>Movies</span>
            </div>

        </div>
      </div>
      </center>
    </div>
  )
}
