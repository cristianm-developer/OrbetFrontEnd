import "./logo.css"

const Logo = (() => {

    const blurSidebar = () => {
        const el = document.querySelector('#SidebarLeft');

        if(el && !el.classList.contains('hidding')){
            el.classList.add('hidding');
            el.style.pointerEvents = 'none';
            setTimeout(() => {  el.classList.remove('hidding') }, 210);
        }
    }

    return <div id="Logo">
            <img id="LogoImg" src="logo.png"/>
            <h2 className="fontController">ORBET</h2>
            <div id="arrowWrapper">
                <i className="orbeticon-arrowleft arrow"></i>
                <i className="orbeticon-arrowleft arrow arrowInverted" onClick={blurSidebar}></i>
            </div>
        </div>

} );

export default Logo;