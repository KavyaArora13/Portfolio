import React from "react";
import "./ExperienceCard.scss";
import { Fade } from "react-reveal";

export default function ExperienceCard({ cardInfo, isDark }) {
  // Combine the description with bullet points
  const allPoints = [cardInfo.desc, ...(cardInfo.descBullets || [])];

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className={isDark ? "experience-card-dark" : "experience-card"}>
        <div className="experience-card-timeline">
          <div className="timeline-dot"></div>
          <div className="timeline-line"></div>
        </div>
        
        <div className="experience-card-content">
          <div className="experience-card-header">
            <div className="company-logo-wrapper">
              <img
                src={cardInfo.companylogo}
                alt={cardInfo.company}
                className="company-logo"
              />
            </div>
            <div className="header-text">
              <h3 className="company-name">
                {cardInfo.company}
              </h3>
              <span className="role-badge">{cardInfo.role}</span>
              <p className="date-text">{cardInfo.date}</p>
            </div>
          </div>

          <div className="experience-card-body">
            <div className="highlights-section">
              <h4 className="highlights-title">Key Achievements</h4>
              <ul className="highlights-list">
                {allPoints.map((point, i) => (
                  <li
                    key={i}
                    className="highlight-item"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}