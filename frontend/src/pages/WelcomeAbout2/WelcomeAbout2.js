import './WelcomeAbout2.css';
import TopBarDropdown from '../../components/TopBarDropdown';
import logo from '../../assets/img/logo.svg';


function WelcomeAbout2() {
    return (

        <div className='welcomeaboutpage2'>
            <TopBarDropdown />
            <div className="logo-section">
                <img src={logo} alt="Logo" />
            </div>
            <div>
                <p className='welcomep2'>
                A text about the online  <br/>
                school. Lorem ipsum dolor <br/>
                sit amet, consectetur <br/>
                adipiscing elit. Sed mattis<br/>
                erat ante, non eleifend diam<br/>
                auctor in. Lorem ipsum<br/>
                dolor sit amet, consectetur<br/>
                adipiscing elit. Sed mattis<br/>
                erat ante, non eleifend diam<br/>
                auctor in
                </p>

                <div className='Btnabout2'>
                <div>
                    <input type='button' id='btnlogout' value='Log out'></input>
                </div>
                </div>
            </div>

        </div>
    );
}

export default WelcomeAbout2;