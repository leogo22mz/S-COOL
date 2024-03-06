import Form from '../../components/RegisterForm.js';
import './RegisterPage.css'
import ProfilPic from '../../components/ProfilPic.js';
import RegisterForm from '../../components/RegisterForm.js';
import LogIn from '../LogIn/LogIn.js';

function RegisterPage() {
    return (
        <>
            <h5>Join the S-COOL family !</h5>
            <ProfilPic></ProfilPic>
            <RegisterForm></RegisterForm>
        </>
    );
  }
  
  export default RegisterPage;