import "./SideBarLeft.css";

import Logo from "../elements/logo/logo";
import Badge from "../elements/widgetsSidebar/badge/badge";
import ProfileIcon from "../elements/widgetsSidebar/profileIcon/profileIcon";
import ButtonSidebar from "../elements/buttonSidebar/buttonSidebar";
import { useState } from "react";

const SideBarLeft = (() => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        console.log('click')
        setIsOpen(!isOpen);
    }

    return <aside id="SidebarLeft" className={`shadownTopRight ${isOpen? 'extended' : ''}`}>
        
        <Logo onToggle={toggleSidebar}></Logo>
        
        <div id="SidebarLeftBody">
            <br></br>
            <div id="SidebarWidgets">
                <ProfileIcon></ProfileIcon>
                <br></br>
                <Badge></Badge>
            </div>
            <br></br>
            <div id="buttons">
                <ButtonSidebar></ButtonSidebar>
            </div>
        </div>
    </aside>
});

export default SideBarLeft;