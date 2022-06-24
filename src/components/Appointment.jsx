import React, {useState, useEffect} from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";

function Appointment({appoint, onDelete}) {
  const { date_time, appointment_type, patient_id, doctor_id, id, formatted_time} = appoint;
const [patient, setPatient] = useState(null);
const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    fetch(`http://localhost:9292/patients/${patient_id}`)
      .then((resp) => resp.json())
      .then((res) => {
        setPatient(res);
        setIsLoaded(true);
      });
  }, [patient_id]);

  if (!isLoaded) return <h1>Loading...</h1>;


  


	return <div>
    <p>{formatted_time} <br/>
    Appointment type: {appointment_type} <br/>
    Patient: {patient.name}
    </p>
    <Button
      onClick={() => onDelete(id)}
      variant="outlined"
      startIcon={<DeleteIcon />}
    >
      Delete Appointment
    </Button>
  </div>;
}

export default Appointment;
