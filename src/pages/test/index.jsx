import React from 'react';
import moment from 'moment';

const TimeDisplay = ({ timestamp }) => {
    const now = moment();
    const postTime = moment(timestamp * 1000); // 将秒级时间戳转换为毫秒级时间戳

    // 计算时间差
    const diffMinutes = now.diff(postTime, 'minutes');
    const diffHours = now.diff(postTime, 'hours');
    const diffDays = now.diff(postTime, 'days');

    let displayTime;
    if (diffMinutes < 60) {
        // 如果时间差小于1小时，显示分钟
        displayTime = `${diffMinutes} 分钟前`;
    } else if (diffHours < 24) {
        // 如果时间差小于1天，显示小时
        displayTime = `${diffHours} 小时前`;
    } else if (diffDays < 3) {
        // 如果时间差小于3天，显示天数
        displayTime = `${diffDays} 天前`;
    } else {
        // 否则显示具体日期
        displayTime = postTime.format('YYYY-MM-DD');
    }

    return (
        <div>
            <p>发布时间: {displayTime}</p>
        </div>
    );
};

// 示例秒级时间戳
const exampleTimestamp = 1719336929; // 示例时间戳（以秒为单位）

const App = () => {
    return (
        <div>
            <h1>博客时间显示示例</h1>
            <TimeDisplay timestamp={exampleTimestamp} />
        </div>
    );
};

export default App;
