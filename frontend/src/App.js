import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage.js';
import AskPage from './pages/AskPage/AskPage.js';
import ContactUsPage from './pages/ContactUsPage/ContactUsPage.js';
import CourseContent from './pages/CourseContent/CourseContent.js';
import Courses from './pages/Courses/Courses.js';
import Home from './pages/Home/Home.js';
import LogIn from './pages/LogIn/LogIn.js';
import Profile from './pages/Profile/Profile.js';
import SignUp from './pages/SignUp/SignUp.js';
import WelcomeAbout from './pages/WelcomeAbout/WelcomeAbout.js';
import WelcomeAbout2 from './pages/WelcomeAbout2/WelcomeAbout2.js';


function App() {
  return ( 
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/askus' element={<AskPage />} />
      <Route path='/contact' element={<ContactUsPage />} />
      <Route path='/course' element={<LandingPage />} />
      <Route path='/coursecontent' element={<CourseContent />} />
      <Route path='/courses' element={<Courses />} />
      <Route path='/home' element={<Home />} />
      <Route path='/login' element={<LogIn />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/about' element={<WelcomeAbout />} />
      <Route path='/about2' element={<WelcomeAbout2 />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;