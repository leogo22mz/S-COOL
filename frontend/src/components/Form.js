import './Form.css';

function Form() {
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
                        <input className='Btn' id='signup' type='button' value='SIGN UP' />
                    </div>
                    <div className="text-center">
                        <input className='Btn' id='login' type='button' value='Already have an account? Log in instead' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Form;
