import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';

export default function FallingLineSpinner() {
    return (
        <div style={{paddingTop:"25%", margin:"auto", textAlign:'center', minHeight:"100vh", }}>
            <CircularProgress style={{color:"white"}} />
        </div>
    );
}