import "./index.css"

import ProjectCard from "../../components/project-card"
import { projects } from "../../constants"

const Projects = () => {
  return (
    <section className="projects text-center" id="projects">
      <h2>المشاريع</h2>
      <p>
        ابقَ على اطلاع على أحدث المشاريع التي نقدمها لدعم الأسر وتعزيز الروابط
        الأسرية.
      </p>
      <div className="container">
        {projects.map(project => (
          <ProjectCard key={project.link}>
            <ProjectCard.Image imageSrc={project.image} />
            <ProjectCard.Title>{project.title}</ProjectCard.Title>
            <ProjectCard.Description>{project.desc}</ProjectCard.Description>
            <ProjectCard.Progress
              achievedFund={project.reached}
              percentage={project.percentage}
              targetFund={project.target}
            />
            <ProjectCard.BtnGroup link={project.link} />
          </ProjectCard>
        ))}
      </div>
    </section>
  )
}
export default Projects
