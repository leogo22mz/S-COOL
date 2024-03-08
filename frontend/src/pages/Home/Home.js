import './Home.css';
import TopBarDropdown from '../../components/TopBarDropdown';
import { useNavigate } from 'react-router-dom';
import 'typeface-montserrat';
import logo from '../../assets/img/logo.svg';



function Home() {

    const navigate = useNavigate();
    const handleClickAbout = () => {
        navigate("/about");
    }
    const navigate2 = useNavigate();
    const handleClickCourses = () => {
        navigate2("/courses");
    }
    const navigate3 = useNavigate();
    const handleClickQuizz = () => {
        navigate3("");
    }
    const navigate4 = useNavigate();
    const handleClickProfile = () => {
        navigate4("/profile");
    }
    return (
        <>
          
                <TopBarDropdown/>
                <div className='homepage'>
                    <div className="logo-section">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className='topics'>
                        <div>
                            <div className='horizontal-line'>
                                <h3 onClick={handleClickAbout} className='topic'>About</h3>
                            </div>
                            <div>
                                <h3  onClick={handleClickCourses}  className='topic'>Courses</h3>
                            </div>
                            <div>
                                <h3  onClick={handleClickQuizz}  className='topic'>Quizzes</h3>
                            </div>
                            <div>
                                <h3  onClick={handleClickProfile}  className='topic'>Profile</h3>
                            </div>
                        </div>
                    </div>
                </div>
                
           
        </>
        
    );
}

export default Home;