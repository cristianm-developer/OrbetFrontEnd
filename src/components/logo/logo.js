import "./logo.css"

const Logo = (({sidebarExtended}) => {

    const toggleSidebar = () => {
        const el = document.querySelector('#SidebarLeft');
        if(el.classList.contains('extended')){
            el.classList.add('hidding')
            el.classList.remove('extended');
            setTimeout(() => {
                el.classList.remove('hidding');
            }, 220);
        }
        else
            el.classList.add('extended')
    }

    return <div id="Logo">
            <img id="LogoImg" src="logo.png"/>
            <h2 className="fontController">ORBET</h2>
            <div id="arrowWrapper" onClick={toggleSidebar}>
                <i className="orbeticon-arrowleft arrow"></i>
                <i className="orbeticon-arrowleft arrow arrowInverted" ></i>
            </div>
        </div>

} );

export default Logo;