import React from 'react';

const AchievementItem = ({ achievement }) => {
  return (
    <div className="achievement-item">
      <div className="achievement-icon">
        <i className={achievement.icon}></i>
      </div>
      <div className="achievement-content">
        <h3>{achievement.title}</h3>
        <p>{achievement.description}</p>
        <span className="achievement-date">{achievement.date}</span>
      </div>
    </div>
  );
};

export default AchievementItem;