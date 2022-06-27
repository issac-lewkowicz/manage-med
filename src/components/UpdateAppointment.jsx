import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import {
	TextField,
	Select,
	InputLabel,
	MenuItem,
	Container
} from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useParams } from "react-router-dom";

function UpdateAppointment() {
	let { id } = useParams();
	const [isLoaded, setIsLoaded] = useState(false);
  const [app, setApp] = useState({});
	useEffect(() => {
		fetch(`http://localhost:9292/appointments/${id}`)
			.then((res) => res.json())
			.then((appoint) => {
        setApp(appoint)
        setFormData({
          appointment_type: appoint.appointment_type,
          date_time: appoint.date_time,
          patient_id: appoint.patient.id,
          patient_name: appoint.patient.name,
          doctor_id: appoint.doctor_id})
				setIsLoaded(true);
			});
	}, [id]);

  // const [patient, setPatient] = useState(null);

	// useEffect(() => {
	// 	fetch(`http://localhost:9292/patients/${app.patient_id}`)
	// 		.then((resp) => resp.json())
	// 		.then((res) => {
	// 			setPatient(res);
	// 			// setIsLoaded(true);
	// 		});
	// }, [app.patient_id]);

  let defaultFormData = {
    appointment_type: "",
		date_time: "",
		patient_name: "",
		doctor_id: "",
    patient_id: ""
	};
  const [formData, setFormData] = useState(defaultFormData);

	if (!isLoaded) return <h1>Loading...</h1>;
  
	const updateFormData = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
		console.log(formData);
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const patchConfig = {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify(formData),
		};

		fetch(`http://localhost:9292/appointments/${id}`, patchConfig)
			.then((res) => res.json())
			.then((newItem) => {
        console.log(newItem)
			});
	};

	return (
		<Container>
			<h2>UpdateAppointment</h2>
			<form onSubmit={handleSubmit} name="form-field" className="form-field">
				<LocalizationProvider dateAdapter={AdapterDateFns}>
					<DateTimePicker
						renderInput={(props) => <TextField {...props} />}
						label="DateTimePicker"
						name="date_time"
						value={formData.date_time}
						onChange={(newVal) =>
							setFormData({ ...formData, date_time: newVal })
						}
						varient="dialog"
						minDateTime={new Date()}
					/>
				</LocalizationProvider>

				<TextField
					required
					onChange={updateFormData}
					name="patient_name"
					placeholder="Patient Name"
					value={formData.patient_name}
				/>

				<InputLabel>Appointment Type</InputLabel>
				<Select
					required
					onChange={updateFormData}
					name="appointment_type"
					placeholder="Select Appointment Type"
					value={formData.appointment_type}
				>
					<MenuItem value="online">online</MenuItem>
					<MenuItem value="phone">phone</MenuItem>
					<MenuItem value="	in-person"> in-person</MenuItem>
				</Select>
          <br/>
				<Button varient="contained" type="submit">
					Update Appointment{" "}
				</Button>
			</form>
		</Container>
	);
}

export default UpdateAppointment;
