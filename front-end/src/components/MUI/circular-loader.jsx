import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';

export default function CircularIndeterminate() {
  return (
    <div style={{position:"absolute", textAlign:"center", width:"100%", padding:"70px 0"}}>
      <CircularProgress />
    </div>
  );
}