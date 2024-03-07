import { useNavigate } from 'react-router-dom';
import './RegisterForm.css';

function RegisterForm() {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/about");
    }

    return ( 
        <div className="page-container">
            <div className="content-container">
                <form className="container">
                    <div className='form-group'>
                        <label >Username:</label>
                        <input type='text' className="form-control" />
                    </div>
                    <div  className='form-group'>
                        <label>e-mail:</label>
                        <input type='text' className="form-control" />
                    </div>
                    <div  className='form-group'>
                        <label>Repeat e-mail:</label>
                        <input type='text' className="form-control" />
                    </div>
                    <div  className='form-group'>
                        <label>Password:</label>
                        <input type='text' className="form-control" />
                    </div>
                    <div  className='form-group'>
                        <label>Repeat Password:</label>
                        <input type='text' className="form-control" />
                    </div>
                </form>
                <div className='MyBtns '>
                    <div className="text-center">
                        <input className='Btn' id='signupbtn' type='button' value='SIGN UP' />
                    </div>
                    <div className="text-center">
                        <input className='Btn' onClick={handleClick} id='loginbtn' type='button' value='Already have an account? Log in instead' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RegisterForm;
