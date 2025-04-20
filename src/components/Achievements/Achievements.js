import React from 'react';
import './Achievements.css';
import AchievementItem from './AchievementItem';
import CertificateItem from './CertificateItem';
import first from '../../assets/screenshot_20042025_183121.jpg'
import second from '../../assets/screenshot_20042025_183317.jpg'

const Achievements = () => {
  const certifications = [
    {
      id: 1,
      icon: 'fas fa-certificate',
      title: 'Understanding Cloud Fundamentals',
      description: 'Advanced level certification demonstrating expertise in cloud computing concepts, architectures, and services.',
      date: 'Febuary 2023',
      image: first // You'll need to add this image to your assets folder
    },
    {
      id: 2,
      icon: 'fas fa-laptop-code',
      title: 'Cloud Solutions Architect Certification',
      description: 'Professional certification in designing and implementing cloud solutions with a focus on Linux-based infrastructure and containerized applications.',
      date: 'December 2022',
      image: second // You'll need to add this image to your assets folder
    }
  ];

  const achievements = [
    {
      id: 1,
      icon: 'fas fa-trophy',
      title: 'CipherThone 2nd Runner Up',
      description: 'Part of the top 3 teams in the CipherThone 2022 Hackathon, focusing on building a legal chatbot using AI and NLP technologies. Developed a prototype that can answer legal queries with 85% accuracy.',
      date: '2023-2024'
    },
    {
      id: 2,
      icon: 'fas fa-lightbulb',
      title: 'Innotek',
      description: 'Showcase legal chatbot project at Innotek 2024, a tech fest organized by Lovely Professional University. Demonstrated the capabilities of the chatbot to a diverse audience.',
      date: '2024'
    },
    {
      id: 3,
      icon: 'fas fa-code',
      title: 'WebThone ',
      description: 'Participated into WebAThone hackathon, focusing on building a web application using MERN stack. Developed a Tutor application.',
      date: '2024'
    }
  ];

  return (
    <section id="achievements" className="section">
      <div className="section-title">
        <i className="fas fa-trophy"></i>
        <h2>Achievements & Certifications</h2>
      </div>

      <div className="achievement-sections">
        <div className="certification-section">
          <h3 className="subsection-title">
            <i className="fas fa-certificate"></i> Professional Certifications
          </h3>
          <div className="certifications-grid">
            {certifications.map(certification => (
              <CertificateItem key={certification.id} certification={certification} />
            ))}
          </div>
        </div>

        <div className="achievements-section">
          <h3 className="subsection-title">
            <i className="fas fa-award"></i> Accomplishments & Recognitions
          </h3>
          <div className="achievements-list">
            {achievements.map(achievement => (
              <AchievementItem key={achievement.id} achievement={achievement} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;

