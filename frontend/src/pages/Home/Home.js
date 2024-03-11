import './Home.css';
import TopBarDropdown from '../../components/TopBarDropdown';
import { useNavigate } from 'react-router-dom';
import 'typeface-montserrat';
import logo from '../../assets/img/logo.svg';



function Home() {

    const navigate = useNavigate();
    const handleClickAbout = () => {
        navigate("/about2");
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
    const navigate5 = useNavigate();
    const handleClickContact = () => {
        navigate5("/contact");
    }
    return (
        <>
          
            <TopBarDropdown/>
                <div className='homepage'>
                    <div className="logo-section">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className='topics'>
                            <div className='horizontal-lineAbout'>
                                <h3  onClick={handleClickAbout} className='topic'>About</h3>
                            </div>
                            <div className='horizontal-lineCourses'>
                                <h3  onClick={handleClickCourses}  className='topic'>Courses</h3>
                            </div>
                            <div className='horizontal-lineQuizz'>
                                <h3  onClick={handleClickQuizz}  className='topic'>Quizzes</h3>
                            </div>
                            <div className='horizontal-lineProfile'>
                                <h3  onClick={handleClickProfile}  className='topic'>Profile</h3>
                            </div>
                            <div className='horizontal-lineCourses'>
                                <h3  onClick={handleClickContact}  className='topic'>Contact</h3>
                            </div>
                    </div>
                </div>

        </>
        
    );
}

export default Home;