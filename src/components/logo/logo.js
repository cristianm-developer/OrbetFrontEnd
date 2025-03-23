import "./logo.css"

const Logo = (() => {

    const toggleSidebar = () => {
        if(window.innerWidth < 650)
            return;

        const el = document.querySelector('#SidebarLeft');
        el.classList.add('hidding');
        setTimeout(() => {
            el.classList.remove('hidding');
        }, 210);
    }

    return <div id="Logo">
            <img id="LogoImg" src="logo.png"/>
            <h2 className="fontController">ORBET</h2>
            <div id="arrowWrapper">
                <i className="orbeticon-arrowleft arrow"></i>
                <i className="orbeticon-arrowleft arrow arrowInverted" onClick={toggleSidebar}></i>
            </div>
        </div>

} );

export default Logo;