import React from 'react';
import './CourseIndex.css';
import TopBarDropdown from '../../components/TopBarDropdown';

function CourseIndex() {
    return (
        <div className="course-index">
            <TopBarDropdown />
            <div className="course-content">
                <h1>Course_name</h1>
                <p className="course-description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis erat ante, non eleifend diam auctor in.
                    Pellentesque tortor odio, posuere quis sem vitae, condimentum aliquet metus.
                </p>
            </div>
            <div className="button-container">
                <button className="btn-action">let's do it!</button>
                <button className="btn-secondary">back to course overview</button>
            </div>
        </div>
    );
}

export default CourseIndex;
