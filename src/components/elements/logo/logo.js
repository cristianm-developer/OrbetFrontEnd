import "./logo.css"

const Logo = (({onToggle}) => {
    return <div id="Logo">
            <img id="LogoImg" src="logo.png"/>
            <h2 className="fontController">ORBET</h2>
            <i id="expandArrow" onClick={onToggle} ><img id="arrowIcon" src="icons/arrow.svg"></img></i>
        </div>

} );

export default Logo;