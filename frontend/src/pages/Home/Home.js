import './Home.css';
import TopBarDropdown from '../../components/TopBarDropdown';
import { useNavigate } from 'react-router-dom';



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
        <h1>S-COOL LOGO here</h1>
        <div className='topics'>
            <div>
                <h3 onClick={handleClickAbout} className='spacer' >About</h3>
            </div>
            <div>
                <h3  onClick={handleClickCourses}  className='spacer'>Courses</h3>
            </div>
            <div>
                <h3  onClick={handleClickQuizz}  className='spacer'>Quizzes</h3>
            </div>
            <div>
                <h3  onClick={handleClickProfile}  className='spacer'>Profile</h3>
            </div>
        </div>
        </>
        
    );
}

export default Home;