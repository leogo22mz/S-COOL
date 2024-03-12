import './WelcomeAbout2.css';
import TopBarDropdown from '../../components/TopBarDropdown';
import logo from '../../assets/img/logo.svg';


function WelcomeAbout2() {
    return (
        <>
         
            <TopBarDropdown />
            <div className='welcomeaboutpage2'>
                <div className="logo-section">
                    <img src={logo} alt="Logo" />
                </div>
                <div className='paragraph'>
                    <p className='welcomep2'>
                    A text about the online  
                    school. Lorem ipsum dolor 
                    sit amet, consectetur 
                    adipiscing elit. Sed mattis
                    erat ante, non eleifend diam
                    auctor in. Lorem ipsum
                    dolor sit amet, consectetur
                    adipiscing elit. Sed mattis
                    erat ante, non eleifend diam
                    auctor in
                    </p>

                    <div className='Btnabout2'>
                    <div>
                        <input type='button' id='btnlogout' value='Log out'></input>
                    </div>
                    </div>
                </div>

        </div>
        </>
      
    );
}

export default WelcomeAbout2;