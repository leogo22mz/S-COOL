import React from 'react';
import './CourseContent.css';
import TopBarDropdown from '../../components/TopBarDropdown';

function CourseContent() {
    return (
        <div className="course-content-page">
            <TopBarDropdown />
            <div className="course-content-container">
                <h1 className="course-content-title">Web Development</h1>
                <p className="course-content-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis erat ante, non eleifend diam auctor in.
                    Pellentesque tortor odio, posuere quis sem vitae, condimentum aliquet metus.
                </p>
            </div>
            <div className="course-content-buttons-triangle">
                <button className="course-content-button button-left">read more</button>
                <button className="course-content-button button-center">ask a question</button>
                <button className="course-content-button button-right">third action</button>
            </div>
        </div>
    );
}

export default CourseContent;
