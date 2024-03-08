import { useNavigate } from 'react-router-dom';
import './LogInForm.css';

function LogInForm(){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/signup");
    }
    return(
        <div className="page-containerLogin">
            <div className="content-containerLogin">
                <form className="container myform">
                    <div className='form-group compform'>
                        <label className='labelstuff'>Username or email:</label>
                        <input type='text' className="form-control" id='champtxt1' />
                    </div>
                    <div className='form-group compform'>
                        <label className='labelstuff'>Password:</label>
                        <input type='text' className="form-control"  id='champtxt2' />
                    </div>
                </form>
                <div className='MyBtnsLogin'>
                    <div className="text-center">
                        <input className='BtnLogin' id='login' type='button' value='LOG IN' />
                    </div>
                    <div className="text-center">
                        <input className='BtnLogin' onClick={handleClick} id='signup' type='button' value='Don’t have an account? Join us here!' />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LogInForm;
