
import { NavLink } from "react-router-dom";


function Header({ onSearch, searchTerm, onCreateApppointment }) {
  return (
    <div id="Header">
      <NavLink exact to="/" style={{ color: 'inherit', textDecoration: 'inherit'}}>
        <h2 className="Header_Content" id="logo">
          ManageMed
        </h2>
      </NavLink>
    </div>
  );
}

export default Header;