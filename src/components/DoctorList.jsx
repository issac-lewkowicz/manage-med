import React from 'react'
import DoctorCard from "./DoctorCard";

function DoctorList( {docList} ) {
  const docs = docList.map( doc => <DoctorCard  key={doc.id} doc={doc}/>)
  return (
    <div>
    <ul>
      {docs}
    </ul>  
    </div>
  )
}

export default DoctorList