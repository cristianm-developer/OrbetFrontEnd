import { useLocation, useNavigate } from 'react-router-dom';
import './buttonSidebar.css';

const ButtonSidebar = ( ({isActive, clickCallback, route, name, iconClassname}) => {

    const navigate = useNavigate();
    const location = useLocation();

    let isActiveButton = isActive || (route && location.pathname == route);

    const clickHandler = () => {
        if(clickCallback)
            clickCallback();

        if(route)
            navigate(route);
    }

    return <a className={`buttonSidebar ${isActiveButton? 'active' : ''}`} onClick={clickHandler ?? (() => {})}>
        <div className='hoverSignal'></div>
        <div className='buttonContainer'>
            <div className='buttonSidebarWrapper'>
                <i className={`buttonIcon ${iconClassname}`}></i>
            </div>
        </div>
        <div className='titleWrapper'>
            <span className='btnTitle'>{name}</span>
            <div className='activeSignal'></div>
        </div>
    </a>
})

export default ButtonSidebar