import { isTouchDevice, shrinkSidebarLeft } from "../../shared/UiControl";
import "./logo.css"

const Logo = (() => {

const toggleSidebar = (event) => {

    if(isTouchDevice())
        return;

    const el = document.querySelector('#SidebarLeft');
    if(el.classList.contains('extended'))
        shrinkSidebarLeft();

}

    return <div id="Logo" onTouchStart={toggleSidebar} onClick={toggleSidebar}> 
            <img id="LogoImg" src="logo.png"/>
            <h2 className="fontController">ORBET</h2>
            <div id="arrowWrapper">
                <i className="orbeticon-arrowleft arrow"></i>
                <i className="orbeticon-arrowleft arrow arrowInverted" ></i>
            </div>
        </div>

} );

export default Logo;