import { useNavigate } from 'react-router-dom';
import './LogInForm.css';

function LogInForm(){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/signup");
    }
    return(

        
        <div className="page-container">
        <div className="content-container">
            <form className="container2">
                <div className='form-group'>
                    <label >Username/email:</label>
                    <input type='text' className="form-control" />
                </div>
                <div  className='form-group'>
                    <label>Password:</label>
                    <input type='text' className="form-control" />
                </div>
                
            </form>
            <div className='MyBtns '>
                <div className="text-center">
                    <input className='Btn' id='login' type='button' value='LOG IN' />
                </div>
                <div className="text-center">
                    <input className='Btn' onClick={handleClick} id='signup' type='button' value='Don’t have an account? Join us here!' />
                </div>
            </div>
        </div>
    </div>
    );
}
export default LogInForm;