import React from 'react';
import moment from 'moment';

const TimeDisplay = ({ timestamp }) => {
    const now = moment();
    const postTime = moment(timestamp* 1000);
    const diffMinutes = now.diff(postTime, 'minutes');
    const diffHours = now.diff(postTime, 'hours');
    const diffDays = now.diff(postTime, 'days');
    let displayTime;
    if (diffMinutes < 60) {
        displayTime = `${diffMinutes} m`;
    } else if (diffHours < 24) {
        displayTime = `${diffHours} h`;
    } else if (diffDays < 3) {
        displayTime = `${diffDays} d`;
    } else {
        displayTime = postTime.format('YYYY-MM-DD');
    }

    return (
        <div style={{color: "#8f9595", fontSize: "0.8rem"}}>
            · {displayTime}
        </div>
    );
};


export default TimeDisplay;