import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import DeleteIcon from "@mui/icons-material/Delete";
import UpdateIcon from "@mui/icons-material/Update";
import { NavLink } from "react-router-dom";

function Appointment({ appoint, onDelete }) {
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
					variant="outlined"
					startIcon={<UpdateIcon />}
				>
          <NavLink
						to={`/update-appointment/${id}`}
						style={{ color: "inherit", textDecoration: "inherit" }}
					>
						<h4>Update Appointment</h4>
					</NavLink>
					
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
