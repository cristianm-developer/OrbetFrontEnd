import './TopBar.css';
import ButtonBase from "../elements/buttonBase/buttonBase";
import ButtonElevated from '../elements/buttonElevated/buttonElevated';
import LoadingBar from '../elements/loadingBar/loadingBar';
import ProfileIcon from '../elements/widgetsSidebar/profileIcon/profileIcon'
import { useContext } from 'react';
import { UserContext } from '../../contexts/UserContext';
import { ProjectContext } from '../../contexts/ProjectContext';


const TopBar = (() => {

    let {money} = useContext(UserContext);
    let {starPassProgress} = useContext(ProjectContext);

    return <div id="TopBar">
        <section id="TopBarSearch">
            <ButtonBase content={
                <i className='orbeticon-moon'></i>
            }></ButtonBase>
            <ButtonBase content={
                <i className='orbeticon-wave'></i>
            }></ButtonBase>

            <ButtonBase  content={
                <div className='wrapperFlex inputSearch'>
                    <i className='orbeticon-search'></i>
                    
                    <input type="text" placeholder='Search...'></input>
                </div>
            }></ButtonBase>
        </section>
        <section id="TopBarWallet">
            <ButtonBase content={
                <div className='wrapperFlex'>
                    <h3 className='fontController'>{new Intl.NumberFormat('en-Us', {style: 'currency', currency:'USD'}).format(money)}</h3>
                    <ButtonElevated content={
                        <div className='wrapperFlex'>
                            <i className='orbeticon-stars'></i>
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
                            <span className='primary-text'>{starPassProgress}%</span>
                        </div>       
                        <LoadingBar value='63' total='100' ></LoadingBar>
                    </div>
                }></ButtonBase>
            <ButtonBase content={
                <i className='orbeticon-bell'></i>
            }></ButtonBase>
            <ButtonBase content={
                <div className='wrapperFlex rewardBtn'>
                    <img className='icon' src="icons/RewardBox.png"></img>
                    <span>Reward</span>
                    <i className='orbeticon-arrowdown1'></i>
                </div>
            }></ButtonBase>
            <ButtonBase content={
                <i className='orbeticon-dialog'></i>
            }></ButtonBase>
            <div id='MenuBtn'>
                <ProfileIcon></ProfileIcon>
            </div>
        </section>
    </div>
})

export default TopBar;