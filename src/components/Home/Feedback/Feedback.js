import React from 'react';
import './Feedback.css';

const Feedback = ({ feedback }) => {
    const { name, img, profession, feedbacks } = feedback;
    return (
        <div className="feedback col-lg-4 col-sm-6 col-12">
            <div className="my-2">
                <img src={img} alt="" />
            </div>
            <h3>{name}</h3>
            <span><b>Profession:</b></span> {profession} <br /><br />
            <p><b>Feedback:</b><br /><blockquote><q>{feedbacks}</q></blockquote> </p><br />
        </div>
    );
};

export default Feedback;