import React, {useState, useEffect} from "react";

function Appointment({appoint}) {
  console.log("from Appointment: ", appoint)
  const { date_time, appointment_type, patient_id, doctor_id, id} = appoint;
const [patient, setPatient] = useState(null);
const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:9292/doctors/patients/${patient_id}`)
      .then((resp) => resp.json())
      .then((res) => {
        setPatient(res);
        setIsLoaded(true);
      });
  }, []);

  // if (!isLoaded) return <h1>Loading...</h1>;
console.log(patient)
	return <div>
    <p>{date_time} <br/>
    Appointment type: {appointment_type} <br/>
    {patient}
    </p>
  </div>;
}

export default Appointment;
