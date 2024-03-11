import { useNavigate } from 'react-router-dom';
import './RegisterForm.css';
 


function RegisterForm() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/about");
    }

    return ( 
        <div className="page-containerRegister">
            <div className="content-containerRegister">
                <form className="containerRegister">
                    <div className='form-group champform'>
                        <label >Create username:</label>
                        <input type='text' className="form-control champtext" />
                    </div>
                    <div  className='form-group champform'>
                        <label>Your e-mail:</label>
                        <input type='email' className="form-control champtext" />
                    </div>
                    <div  className='form-group champform'>
                        <label>Repeat your e-mail:</label>
                        <input type='email' className="form-control champtext" />
                    </div>
                    <div  className='form-group champform'>
                        <label>Create password:</label>
                        <input type='password' className="form-control champtext" />
                    </div>
                    <div  className='form-group champform'>
                        <label>Repeat Password:</label>
                        <input type='password' className="form-control champtext" />
                    </div>
                </form>
                <div className='MyBtnsRegister'>
                    <div className="text-center">
                        <input className='BtnRegister' id='signupbtn' type='button' value='SIGN UP' />
                    </div>
                    <div className="text-center">
                        <input className='BtnRegister' onClick={handleClick} id='loginbtn' type='button' value='Already have an account? Log in instead' />
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterForm;
