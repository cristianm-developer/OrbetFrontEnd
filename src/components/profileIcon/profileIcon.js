import { useContext } from 'react';
import './profileIcon.css';
import { UserContext } from '../../domains/auth/UserContext';


const ProfileIcon = (() => {
    const infoUsuario = useContext(UserContext)

    return <a className='profileIcon'> 
        <div className='wrapperProfileIcon'>
            <img className='profilePhoto' src={infoUsuario.profileImg}/>
            <div className='wrapperFlex subText'>
                <i className='orbeticon-crownminimalistic'></i>
                <span>VIP</span>
            </div>
            <div className='bg'></div>
        </div>
        <span className='nome'>{infoUsuario.name}</span> 
    </a>
});

export default ProfileIcon