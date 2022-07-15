//import logo from './logo.svg';
import "../App.css";
import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./Header";
import Navbar from "./Navbar";
import DoctorList from "./DoctorList";
import DocPatients from "./DocPatients";
import DocAppointments from "./DocAppointments";
import NewAppointment from "./NewAppointment";
import UpdateAppointment from "./UpdateAppointment";

function App() {
	const [docList, setDocList] = useState([]);

	useEffect(() => {
		fetch("http://localhost:9292/doctors")
			.then((res) => res.json())
			.then(setDocList);
	}, []);

	return (
		<div className="App">
			<Header />
			<Navbar />
			<Switch>
				<Route exact path="/">
					<DoctorList docList={docList} />
				</Route>

				<Route path="/doc-appointments/:id">
					<DocAppointments docList={docList}/>
				</Route>

				<Route path="/new-appointment/">
					<NewAppointment />
				</Route>
				<Route path="/update-appointment/:id">
					<UpdateAppointment />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
