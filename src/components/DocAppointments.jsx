import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Appointment from "./Appointment";

function DocAppointments() {
  const [apps, setApps] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  let { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:9292/appointments/${id}`)
      .then((res) => res.json())
      .then((appoints) => {
        setApps(appoints);
        setIsLoaded(true);
      });
  }, [id]);

  if (!isLoaded) return <h1>Loading...</h1>;

  const appointments = apps.map(appoint => <Appointment key={appoint.id} appoint={appoint}/>) 
  
  return (
    <div>{appointments}</div>
  )
}

export default DocAppointments