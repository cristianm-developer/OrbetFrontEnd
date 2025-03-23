import "./SideBarLeft.css";

import Logo from "../../components/logo/logo";
import Badge from "../../components/badge/badge";
import ProfileIcon from "../../components/profileIcon/profileIcon";
import ButtonSidebar from "../../components/buttonSidebar/buttonSidebar";
import ButtonElevated from "../../components/buttonElevated/buttonElevated";
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
                <ButtonSidebar  name='Home' route='/' iconClassname='orbeticon-home2' ></ButtonSidebar>
                <ButtonSidebar  name='Missions' iconClassname='orbeticon-starangle' ></ButtonSidebar>
                <ButtonSidebar  name='Rewards' iconClassname='orbeticon-cupstar' ></ButtonSidebar>
                <ButtonSidebar  name='Promotions' iconClassname='orbeticon-verifiedcheck' ></ButtonSidebar>
                <ButtonSidebar  name='Affiliate' iconClassname='orbeticon-ufo4' ></ButtonSidebar>
                <ButtonSidebar  name='StarPass' iconClassname='orbeticon-tickestar' ></ButtonSidebar>
                <ButtonSidebar  name='Favorites' iconClassname='orbeticon-startsminimalistic' ></ButtonSidebar>
                <ButtonSidebar  name='Originals' iconClassname='orbeticon-blackhole2' ></ButtonSidebar>
                <ButtonSidebar  name='Slots' iconClassname='orbeticon-dollarminimalistic' ></ButtonSidebar>
                <ButtonSidebar  name='Live Casino' iconClassname='orbeticon-ticketsale' ></ButtonSidebar>
                <ButtonSidebar  name='Blackjack' iconClassname='orbeticon-compasssquare' ></ButtonSidebar>
                <ButtonSidebar  name='Roulette' iconClassname='orbeticon-wheel' ></ButtonSidebar>
                <ButtonSidebar  name='Game Shows' iconClassname='orbeticon-handstars' ></ButtonSidebar>
                <ButtonSidebar  name='Bacarat' iconClassname='orbeticon-copy' ></ButtonSidebar>
            </div>
            <br></br>
      
            <div id="sidebatSpecialBtn">
            <ButtonElevated content={<div className="buttonBuyCrypto">
                <i className="orbeticon-bitcoin"></i>
                <span className="nameBtn">Buy Crypto</span>
            </div>}>
            </ButtonElevated>
            </div>
        
        </div>
    </aside>
});

export default SideBarLeft;