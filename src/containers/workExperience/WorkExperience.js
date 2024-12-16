import React from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import { workExperiences } from "../../portfolio";
import { Fade } from "react-reveal";

export default function WorkExperience() {
  if (!workExperiences.display) {
    return null;
  }
  
  return (
    <section id="experience" className="experience-section">
      <Fade bottom duration={1000} distance="20px">
        <div className="experience-container">
          <div className="experience-header">
            <h1 className="experience-title">
              Work Experience
            </h1>
            <p className="experience-subtitle">My professional journey</p>
          </div>

          <div className="experience-timeline">
            {workExperiences.experience.map((card, i) => (
              <ExperienceCard
                key={i}
                cardInfo={card}
                index={i}
              />
            ))}
          </div>
        </div>
      </Fade>
    </section>
  );
}