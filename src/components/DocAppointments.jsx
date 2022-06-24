import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Appointment from "./Appointment";
import { Stack } from "@mui/material";

function DocAppointments({docList}) {
  const [apps, setApps] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  // const [newDocList, setNewDocList] = useState([])
  let { id } = useParams();
  // console.log("param id: ", id)


  useEffect(() => {
    fetch(`http://localhost:9292/doctors/${id}`)
      .then((res) => res.json())
      .then((appoints) => {
        setApps(appoints);
        // setNewDocList(docList)
        setIsLoaded(true);
      });
  }, [id]);

  // const handleNewAppointment = (newAppointment) => {
  //   const updatedAppList = [...apps, newAppointment];
  //   setApps(updatedAppList)
  //   }

  const handleDelete = (id) => {
    const newAppList = apps.filter((app) => app.id !== id);
    setApps(newAppList);
  }

  function onDelete(id) {
fetch(`http://localhost:9292/appointments/${id}`, {
  method: 'DELETE'
 })
handleDelete(id)
}

const handleUpdateApp = (newApp) => {
  const updatedAppList = apps.map(app => app.id === newApp.id ? newApp : app)
  setApps(updatedAppList)
}

  if (!isLoaded) return <h1>Loading...</h1>;
  if (apps.length === 0) return "No Appointments Scheduled";

  
  // let currentDoc = newDocList.find(doc => doc.id === id);
  // console.log("currnet Doc: ", currentDoc);
  const appointments = apps.map(appoint => <Appointment key={appoint.id} appoint={appoint} onDelete={onDelete} handleUpdateApp={handleUpdateApp}/>); 
  return (
    <>
    {/* <h2>{currentDoc.name}</h2> */}
    <Stack spacing={2}>{appointments}</Stack>
    </>
  )
}

export default DocAppointments