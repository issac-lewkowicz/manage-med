import React from 'react'

function DoctorCard({doc}) {
  const {id, name, specialty, email, phone } = doc
  return (
    <li>{"Dr. " + name}</li>
  )
}

export default DoctorCard