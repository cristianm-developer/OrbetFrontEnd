import './buttonSidebar.css';

const ButtonSidebar = ( ({isActive}) => {
    return <a className={`buttonSidebar active ${isActive? 'active' : ''}`}>
        <div className='hoverSignal'></div>
        <div className='buttonContainer'>
            <div className='buttonSidebarWrapper'>
                <img className='icon' src="icons/gear.svg"></img>
            </div>
            <span className='btnTitle'>Home</span>
            <div className='activeSignal'></div>
        </div>
    </a>
})

export default ButtonSidebar