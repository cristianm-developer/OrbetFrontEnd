import ButtonBase from '../elements/buttonBase/buttonBase';
import ButtonSidebar from '../elements/buttonSidebar/buttonSidebar';
import Badge from '../elements/widgetsSidebar/badge/badge';
import ProfileIcon from '../elements/widgetsSidebar/profileIcon/profileIcon';
import './SideBarRight.css';

const SideBarRight = (() => 
    <aside id='SideBarRight' className='wrapperVerticalFlex extended'>
        <section className='wrapperFlex'>
            <ProfileIcon></ProfileIcon>
        </section>
        <br></br>
        <section>
            <Badge></Badge>
        </section>
        <br></br>
        <section className='flexExtend'>
            <div className='wrapperFlex'>
                <ButtonSidebar></ButtonSidebar>
            </div>
        </section>
        <section>
            <div className='wrapperFlex logoutButton'>
                <img className='icon' src='icons/gear.svg'></img>
                <span>Logout</span>
            </div>
        </section>
    </aside>
);

export default SideBarRight;