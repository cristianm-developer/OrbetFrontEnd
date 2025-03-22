import './TopBar.css';
import ButtonBase from "../elements/buttonBase/buttonBase";
import ButtonElevated from '../elements/buttonElevated/buttonElevated';
import LoadingBar from '../elements/loadingBar/loadingBar';
import ProfileIcon from '../elements/widgetsSidebar/profileIcon/profileIcon'


const TopBar = (() => {
    return <div id="TopBar">
        <section id="TopBarSearch">
            <ButtonBase content={
                <img className='icon' src="icons/gear.svg"></img>
            }></ButtonBase>
            <ButtonBase content={
                <img className='icon' src="icons/gear.svg"></img>
            }></ButtonBase>
            <ButtonBase  content={
                <div className='wrapperFlex inputSearch'>
                    <img className='icon' src="icons/gear.svg"></img>
                    <input type="text" placeholder='Search...'></input>
                </div>
            }></ButtonBase>
        </section>
        <section id="TopBarWallet">
            <ButtonBase content={
                <div className='wrapperFlex'>
                    <h3 className='fontController'>$3,547.002</h3>
                    <ButtonElevated content={
                        <div className='wrapperFlex'>
                            <img className='icon' src='icons/gear.svg'></img>
                            <span>Wallet</span>
                        </div>
                    }>
                    </ButtonElevated>
                </div>
            }>
            </ButtonBase>
        </section>
        <section id="TopBarUser">
            <ButtonBase  content={
                    <div className='wrapperVerticalFlex buttonWithLoadingBar'>
                        <div className='wrapperFlex textoTop'>
                            <span>Star Pass</span>
                            <span className='primary-text'>63%</span>
                        </div>       
                        <LoadingBar></LoadingBar>
                    </div>
                }></ButtonBase>
            <ButtonBase content={
                <img className='icon' src="icons/gear.svg"></img>
            }></ButtonBase>
            <ButtonBase content={
                <div className='wrapperFlex rewardBtn'>
                    <img className='icon' src="icons/gear.svg"></img>
                    <span>Reward</span>
                    <img className='icon' src="icons/gear.svg"></img>
                </div>
            }></ButtonBase>
            <ButtonBase content={
                <img className='icon' src="icons/gear.svg"></img>
            }></ButtonBase>
            <div id='MenuBtn'>
                <ProfileIcon></ProfileIcon>
            </div>
        </section>
    </div>
})

export default TopBar;