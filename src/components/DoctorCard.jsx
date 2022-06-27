import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";
import ToggleButton from "@mui/material/ToggleButton";
import InfoIcon from "@mui/icons-material/Info";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

function DoctorCard({ doc }) {
	const { id, name, specialty, email, phone } = doc;
	const [selected, setSelected] = useState(false);

	const details = selected ? (
		<>
			<p>Email: {email}</p>
			<p>Phone: {phone}</p>
		</>
	) : null;
	return (
		<Card>
			<CardContent>
        <Button >
				<NavLink
					id="dr__header"
					to={`/doc-appointments/${id}`}
					style={{ color: "inherit", textDecoration: "inherit" }}
				>
					<h2>{"Dr. " + name}</h2>
				</NavLink>
        </Button>
				<p>{specialty}</p>
				<Button variant="contained">
					<NavLink
						to={`/new-appointment/${id}`}
						style={{ color: "inherit", textDecoration: "inherit" }}
					>
						<h4>New Appointment</h4>
					</NavLink>
				</Button>
				<br />
				<br />
				<ToggleButton
					value="check"
					selected={selected}
					onChange={() => {
						setSelected(!selected);
					}}
				>
					<InfoIcon />
					&nbsp; Details
				</ToggleButton>
				{details}
			</CardContent>
		</Card>
	);
}

export default DoctorCard;
