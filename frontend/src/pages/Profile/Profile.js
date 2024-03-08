import './Profile.css';
import TopBarDropdown from '../../components/TopBarDropdown';

function Profile() {

    return (

        <div>
            <TopBarDropdown />
            <h2 id='profiletitle'>Profile</h2>
            <div className='profile-container'>
                <div class="profile-icon">
                    <i class="fas fa-user"></i> 
                </div>
                <div>
                    <p>name here</p>
                    <p>email here</p>
                    <input type='button' value={'Change Password'}></input>
                </div>
            </div>
            

        </div>
    );
}

export default Profile;