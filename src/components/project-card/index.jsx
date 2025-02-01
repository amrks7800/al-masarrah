import "./index.css"
import ProgressPar from "../progress-bar"
import Button from "../button/Button"

const ProjectCard = ({ children }) => {
  return <div className="project-card">{children}</div>
}
export default ProjectCard

ProjectCard.Title = ({ children }) => {
  return <h2 className="project-card__title">{children}</h2>
}

ProjectCard.Image = ({ imageSrc }) => {
  return <img className="project-card__img" src={imageSrc} />
}

ProjectCard.Description = ({ children }) => {
  return <p className="project-card__description">{children}</p>
}

ProjectCard.Progress = ({ percentage, achievedFund, targetFund }) => {
  return (
    <div className="project-card__progress">
      <div className="flex justify-between fund">
        <p>{achievedFund}</p>
        <p>{targetFund}</p>
      </div>
      <ProgressPar percentage={percentage} />
    </div>
  )
}

ProjectCard.BtnGroup = ({ both = false, link = "https://almsarra.com" }) => {
  return (
    <div className={`project-card__btn-group ${both ? "flex" : ""}`}>
      <a href={link}>
        <Button
          variant="secondary"
          pill={false}
          style={{
            width: both ? "max-content" : "100%",
          }}
          data-shadow="hidden"
        >
          تبرع الان
        </Button>
      </a>
      {both && (
        <Button variant="tertiary" pill={false}>
          المزيد
        </Button>
      )}
    </div>
  )
}
