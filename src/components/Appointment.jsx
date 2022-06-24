import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";

function Appointment({ appoint, onDelete, handleUpdateApp }) {
	const {
		date_time,
		appointment_type,
		patient_id,
		doctor_id,
		id,
		formatted_time,
	} = appoint;
	const [isLoaded, setIsLoaded] = useState(false);
	const [patient, setPatient] = useState(null);

	useEffect(() => {
		fetch(`http://localhost:9292/patients/${patient_id}`)
			.then((resp) => resp.json())
			.then((res) => {
				setPatient(res);
				setIsLoaded(true);
			});
	}, [patient_id]);



	if (!isLoaded) return <h1>Loading...</h1>;

	return (
		<Card>
			<CardContent>
				<p>
					{formatted_time} <br />
					Appointment type: {appointment_type} <br />
					Patient: {patient.name}
				</p>
				<br />
				<Button
					onClick={() => handleUpdateApp(id)}
					variant="outlined"
					startIcon={<UpdateIcon />}
				>
					Update Appointment
				</Button>
				<Button
					onClick={() => onDelete(id)}
					variant="outlined"
					startIcon={<DeleteIcon />}
				>
					Delete Appointment
				</Button>
			</CardContent>
		</Card>
	);
}

export default Appointment;
