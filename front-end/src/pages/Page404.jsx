import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Page404() {
  return (
    <div style={{padding:"100px 0"}}>
      <div style={{border:'2px solid crimson', textAlign:"center", maxWidth:"315px", margin:"auto", padding:"50px 0", borderRadius:"8px"}}>
        <h3 className='protest-riot-regular'><span style={{color:"crimson"}}>Pa</span>ge Not Found</h3>
        <h1 className='protest-riot-regular'>4<span style={{color:"crimson"}}>0</span>4</h1>
        <div style={{padding:"0 10px"}}>The Page you are looking for doesn't exist or an other error occured. <br/>Go back to <NavLink to="/" style={{color:"crimson"}}>Home</NavLink></div>
      </div>
    </div>
  )
}
