import './profileIcon.css';

const ProfileIcon = (({isOpen}) => {
    return <a className={`profileIcon ${isOpen? 'openObj' : ''}`}> 
        <div className='wrapperProfileIcon'>
            <img className='profilePhoto' src="./resources/imgs/StrongMan.png"/>
            <div className='wrapperFlex subText'>
                <img src='./resources/icons/gear.svg' className='icon-small'></img>
                <span>VIP</span>
            </div>
            <div className='bg'></div>
        </div>
        <span className='nome'>MDXAGENCY98</span> 
    </a>
});

export default ProfileIcon