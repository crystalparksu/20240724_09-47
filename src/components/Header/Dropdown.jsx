import './Dropdown.css';
import MenuItems from "./MenuItems";
import Navbar from "./Navbar";



const Dropdown = ({ submenus }) => {
    return (
        <ul className="dropdown">
            {submenus.map((submenu, index) => (
                <li key={index} className="menu-items">
                    <a href={submenu.url}>{submenu.title}</a>
                </li>
            ))}
        </ul>
    );
};
export default Dropdown;