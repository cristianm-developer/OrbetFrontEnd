import "./logo.css"

const Logo = (() => {

    return <div id="Logo">
            <img id="LogoImg" src="logo.png"/>
            <h2 className="fontController">ORBET</h2>
            <div id="arrowWrapper">
                <i className="orbeticon-arrowleft arrow"></i>
                <i className="orbeticon-arrowleft arrow arrowInverted" ></i>
            </div>
        </div>

} );

export default Logo;