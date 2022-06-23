import React from 'react'
import DoctorCard from "./DoctorCard";
import { Stack } from "@mui/material";

function DoctorList( {docList} ) {
  const docs = docList.map( doc => <DoctorCard  key={doc.id} doc={doc}/>)
  return (
    <div>
    <Stack spacing={2} margin={0}>
      {docs}
    </Stack>  
    </div>
  )
}

export default DoctorList