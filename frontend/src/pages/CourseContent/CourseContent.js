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
                <div className="course-content-actions">
                    <div className="course-content-buttons-top">
                        <button className="course-content-button">read more</button>
                        <button className="course-content-button">ask a question</button>
                    </div>
                    <div className="course-content-buttons-bottom">
                        <button className="course-content-button">third action</button>
                    </div>
                </div>
            </div>
            <a href="#" className="course-content-back">← back</a>
        </div>
    );
}

export default CourseContent;
