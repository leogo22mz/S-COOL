import './SignUp.css';
import ProfilPic from '../../components/ProfilPic.js';
import RegisterForm from '../../components/RegisterForm.js';

function SignUp() {

  
    return (

        <div className='signuppage '>
            <div className='horizontal-lineTitle'>
                <h5 id='signuptitle'>Join the S-COOL family!</h5>
            </div>
            <ProfilPic/>
            <RegisterForm/>
        </div>
    );
}

export default SignUp;