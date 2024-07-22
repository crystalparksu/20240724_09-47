import Dropdown from './Dropdown';
import {useState} from "react";
import { Link } from 'react-router-dom';



const MenuItems = ({ items, depthLevel }) => {



    const onMouseLeave = () => {
        setDropdown(false);
    };

    const toggleDropdown = () => {
        setDropdown((prev) => !prev);
    };


    const closeDropdown = () => {
        dropdown && setDropdown(false);
    };


    return (
        <li
            className="menu-items"
            ref={ref}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}>
            {items.url && items.submenu ? (
                <>
                    <button
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? "true" : "false"}
                        onClick={() => toggleDropdown()}>
                        <Link to={items.url}>{items.title}</Link>
                        {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow"/>}
                    </button>
                    <Dropdown
                        depthLevel={depthLevel}
                        submenus={items.submenu}
                        dropdown={dropdown}
                    />
                </>
            ) : !items.url && items.submenu ? (
                <>
                    <button
                        type="button"
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? "true" : "false"}>
                        {items.title}
                        {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow"/>}
                    </button>
                    <Dropdown
                        depthLevel={depthLevel}
                        submenus={items.submenu}
                        dropdown={dropdown}
                    />
                </>
            ) : (
                <Link to={items.url}>{items.title}</Link>
            )}
        </li>
    );
};
export default MenuItems;