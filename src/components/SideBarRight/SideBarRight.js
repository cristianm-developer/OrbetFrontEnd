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
            <ButtonSidebar name='My Wallet' iconClassname='orbeticon-wallet'></ButtonSidebar>
            <ButtonSidebar name='Vault' iconClassname='orbeticon-moneybag'></ButtonSidebar>
            <ButtonSidebar name='Affiliate Program' iconClassname='orbeticon-handstars'></ButtonSidebar>
            <ButtonSidebar name='Transactions' iconClassname='orbeticon-cardtransfer'></ButtonSidebar>
            <ButtonSidebar name='Redeem Code' iconClassname='orbeticon-ticketsale'></ButtonSidebar>
            <ButtonSidebar name='Settings' iconClassname='orbeticon-rocket'></ButtonSidebar>
            <ButtonSidebar name='Live Support' iconClassname='orbeticon-headphonesroundsound'></ButtonSidebar>
        </section>
        <section>
            <div className='wrapperFlex logoutButton'>
                <i className='orbeticon-poweron '></i>
                <span>Logout</span>
            </div>
        </section>
    </aside>
);

export default SideBarRight;