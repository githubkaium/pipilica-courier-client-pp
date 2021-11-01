import React, { useEffect, useState } from 'react';
import Feedback from '../Feedback/Feedback';
import './Feedbacks.css';

const Feedbacks = () => {
    const [feedbacks, setFeedbacks] = useState([]);
    useEffect((() => {
        fetch('./feedbackDb.json')
            .then(res => res.json())
            .then(data => setFeedbacks(data));
    }), [])

    return (
        <div id="feedbacks" className="container">
            <h2 className="mt-5 mb-3">Feedbacks</h2>
            <div className="row ">
                {
                    feedbacks.map(feedback => <Feedback
                        key={feedback.id}
                        feedback={feedback}
                    >
                    </Feedback>)
                }
            </div>
        </div>
    );
};

export default Feedbacks;