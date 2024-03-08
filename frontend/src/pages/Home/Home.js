import './Home.css';
import TopBarDropdown from '../../components/TopBarDropdown';
import { Link } from 'react-router-dom';
import 'typeface-montserrat';
import logo from '../../assets/img/logo.svg';

function Home() {

    return (<div className="home-container">
    <TopBarDropdown />
    <div className="logo-section">
        <img src={logo} alt="Logo" />
    </div>
    <nav className="home-navigation-menu">
        <Link to="/about" className="home-menu-item"><span className="home-item">About</span></Link>
        <Link to="/courses" className="home-menu-item"><span className="home-item">Courses</span></Link>
        <Link to="/" className="home-menu-item"><span className="home-item">Quizzes</span></Link>
        <Link to="/profile" className="home-menu-item"><span className="home-item">Profile</span></Link>
        <Link to="/contact" className="home-menu-item"><span className="home-item">Contact</span></Link>
    </nav>

</div>
        
    );
}

export default Home;