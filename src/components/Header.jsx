//import TextField from "@mui/material/TextField";
import { NavLink } from "react-router-dom";
//import IconButton from "@mui/material/IconButton";

function Header({ onSearch, searchTerm, onCreateApppointment }) {
  return (
    <div id="Header">
      <NavLink exact to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
        <h2 className="Header_Content" id="logo">
          ManageMed
        </h2>
      </NavLink>

      {/* <TextField
        size="small"
        className="Header_Content"
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => onSearch(e.target.value)}
      /> */}


      {/* <NavLink to="/pathSomthing">
        <IconButton size="large" aria-label="New Appointment" color="primary">
          <SomeIcon />
        </IconButton>
      </NavLink> */}
    </div>
  );
}

export default Header;