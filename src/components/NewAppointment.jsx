import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import {TextField, Select, InputLabel, MenuItem, Container } from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useParams } from "react-router-dom";


function NewAppointment() {
  let { id } = useParams();
	const defaultFormData = {
		appointment_type: "",
		date_time: new Date() , //needs to be converted to unformatted time?
		patient_name: "",
		doctor_id: `${id}`,
	};

	const [formData, setFormData] = useState(defaultFormData);

	const updateFormData = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();

		const postConfig = {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		};

		fetch(`http://localhost:9292/appointments`, postConfig)
			.then((res) => res.json())
			.then((newItem) => {
				// onAddItem(newItem);
				setFormData(defaultFormData);
			});
	};


	return (
		<Container>
			<h2>New Appointment</h2>
			<form onSubmit={handleSubmit} name="form-field" className="form-field">

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          renderInput={(props) => <TextField {...props} />}
          label="DateTimePicker"
          name="date_time"
          value={formData.date_time}
          onChange={newVal => setFormData({ ...formData, "date_time": newVal })}
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

				<Button varient="contained" type="submit">
					Add Appointment{" "}
				</Button>
			</form>
		</Container>
	);
}

export default NewAppointment;
