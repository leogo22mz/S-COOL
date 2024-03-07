import './SignUp.css';
import TopBarDropdown from '../../components/TopBarDropdown';
import ProfilPic from '../../components/ProfilPic.js';
import RegisterForm from '../../components/RegisterForm.js';
import { useNavigate } from 'react-router-dom';

function SignUp() {

  
    return (

        <div>
            <h5>Join the S-COOL family !</h5>

            <ProfilPic/>
            <RegisterForm/>
        </div>
    );
}

export default SignUp;