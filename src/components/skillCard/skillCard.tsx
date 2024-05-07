import skills from "../../db/skills.json";
import "./skillCard.css";

const SkillCard = () => {

  return (
    <>
    <div className="skillContainer">
      {skills.map((skill) => (
        <div className="flipCard" key={skill.id}>
          <div className="flipCardInner">
            <div className="flipCardFront">
              <div className="skillIconContainer">
                <img src={skill.icon} alt={skill.name} className="skillIcon" />
                <p>{skill.name}</p>
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
