import './WelcomeAbout2.css';
import TopBarDropdown from '../../components/TopBarDropdown';

function WelcomeAbout2() {
    return (

        <div>
            <TopBarDropdown />
            <h1 id='welcomeabout2title'>S-COOL LOGO here</h1>
            <div>
                <p className='welcomep2'>
                A text about the online school. 
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit.
                Sed mattis erat ante,
                non eleifend diam auctor in. 
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