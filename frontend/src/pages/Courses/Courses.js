import { Link } from 'react-router-dom';
import './Courses.css';
import TopBarDropdown from '../../components/TopBarDropdown';
import logo from '../../assets/img/logo.svg';

function Courses() {
    return (
        <div className="courses-container">
            <TopBarDropdown />
            <div className="logo-section">
                <img src={logo} alt="Logo" />
            </div>
            <nav className="navigation-menu">
                <Link to="/about" className="menu-item"><span className="course-item">Cyber Security</span></Link>
                <Link to="/courses" className="menu-item active"><span className="course-item">Web Development</span></Link>
                <Link to="/quizzes" className="menu-item"><span className="course-item">Psychology</span></Link>
                <Link to="/profile" className="menu-item"><span className="course-item">Finance</span></Link>
                <Link to="/profile" className="menu-item"><span className="course-item">Graphic Design</span></Link>
            </nav>
        </div>
    );
}

export default Courses;
