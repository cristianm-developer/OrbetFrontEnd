import "./logo.css"

const Logo = (() => {

    return <div id="Logo">
            <img id="LogoImg" src="logo.png"/>
            <h2 className="fontController">ORBET</h2>
            <div id="arrowWrapper">
                <i className="orbeticon-arrowleft arrow"></i>
            </div>
        </div>

} );

export default Logo;