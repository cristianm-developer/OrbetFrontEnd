import ButtonSidebar from '../../components/buttonSidebar/buttonSidebar';
import Badge from '../../components/badge/badge';
import ProfileIcon from '../../components/profileIcon/profileIcon';
import './SideBarRight.css';

const SideBarRight = (() => 
    <aside id='SideBarRight' className='wrapperVerticalFlex extended'>
        <section className='wrapperFlex'>
            <ProfileIcon></ProfileIcon>
        </section>
        <br></br>
        <section className='badgeWrapper'>
            <Badge></Badge>
        </section>
        <br></br>
        <section className='flexExtend buttonsWrapper'>
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