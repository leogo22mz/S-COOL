import './WelcomeAbout.css';
import { useNavigate } from 'react-router-dom';
import TopBarDropdown from '../../components/TopBarDropdown';

function WelcomeAbout() {

    const navigate = useNavigate();
    const handleClickSignUp = () => {
        navigate("/signup");
    }
    const navigate2 = useNavigate();
    const handleClickLogIn = () => {
        navigate2("/login");
    }
    return (

        <div>
            <TopBarDropdown />
            <h1 id='welcomeabouttitle'>S-COOL LOGO here</h1>
            <div>
                <p className='welcomep'>
                A text about the online school. 
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit.
                Sed mattis erat ante,
                non eleifend diam auctor in. 
                </p>

                <div className='Btns'>
                <div>
                    <input type='button' onClick={handleClickSignUp} id='btn1' value='Sign me up!'></input>
                </div>
                <div>
                    <input type='button' onClick={handleClickLogIn} id='btn2' value='Log me in!'></input>
                </div>
                </div>
            </div>

        </div>
    );
}

export default WelcomeAbout;