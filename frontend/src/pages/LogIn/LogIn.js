import './LogIn.css';
import LogInForm from '../../components/LogInForm';
import logo from '../../assets/img/logo.svg';


function LogIn() {

    return (

        <div className='loginpage'>
            <div className="logo-section">
                <img src={logo} alt="Logo" />
            </div>
            <LogInForm></LogInForm>
        </div>
    );
}

export default LogIn;