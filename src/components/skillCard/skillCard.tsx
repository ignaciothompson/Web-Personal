import React from "react";
import skills from "../../db/skills.json";
import "./skillCard.css";

const SkillCard: React.FC = () => {

  const handleTouch = (event: React.MouseEvent<HTMLDivElement>) => {
    if(window.innerWidth < 450){
      event.currentTarget.classList.toggle("touch");
    }
  }

  return (
    <>
    <div className="skillContainer">
      {skills.map((skill) => (
        <div className="flipCard" key={skill.id} onClick={handleTouch}>
          <div className="flipCardInner">
            <div className="flipCardFront">
              <div className="skillIconContainer">
                <img src={skill.icon} alt={skill.name} className="skillIcon" />
                <p>{skill.name}</p>
                <p className="flipText">Girar</p>
              </div>
            </div>
            <div className="flipCardBack">
              <div className="skillInfo">
                <p>{skill.experience}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
      </div>
    </>
  );
};

export default SkillCard;
