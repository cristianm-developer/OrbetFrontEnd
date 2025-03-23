import "./logo.css"

const Logo = (() => {

    const toggleSidebar = () => {
        const elArrowInverted = document.querySelector('#arrowWrapper .arrowInverted');

        if(window.innerWidth < 650 || !elArrowInverted)
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
            <div id="arrowWrapper" onClick={toggleSidebar}>
                <i className="orbeticon-arrowleft arrow"></i>
                <i className="orbeticon-arrowleft arrow arrowInverted"></i>
            </div>
        </div>

} );

export default Logo;