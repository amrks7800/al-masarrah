import SubHeroSection from "../../components/sub-hero";
import "./index.css";

import ProjectCard from "../../components/project-card";
import ProjectImg from "/images/hero1.svg";

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <SubHeroSection
        subTitle={"الرئيســـية/المشاريع"}
        title={"المشــــــــــــاريــع"}
      />
      <div className="container">
        <ProjectCard>
          <ProjectCard.Image imageSrc={ProjectImg} />
          <ProjectCard.Title>شمل لتنفيذ أحكام الرؤية</ProjectCard.Title>
          <ProjectCard.Description>
            يتم تنفيذ خدمات الرؤية والزيارة ونقل الحضانة بالشراكة مع وزارة العدل
            للأسر المنفصلة
          </ProjectCard.Description>
          <ProjectCard.Progress
            achievedFund={"$5,000"}
            percentage={50}
            targetFund={"$10,000"}
          />
          <ProjectCard.BtnGroup both />
        </ProjectCard>
        <ProjectCard>
          <ProjectCard.Image imageSrc={ProjectImg} />
          <ProjectCard.Title>شمل لتنفيذ أحكام الرؤية</ProjectCard.Title>
          <ProjectCard.Description>
            يتم تنفيذ خدمات الرؤية والزيارة ونقل الحضانة بالشراكة مع وزارة العدل
            للأسر المنفصلة
          </ProjectCard.Description>
          <ProjectCard.Progress
            achievedFund={"$5,000"}
            percentage={50}
            targetFund={"$10,000"}
          />
          <ProjectCard.BtnGroup both />
        </ProjectCard>
        <ProjectCard>
          <ProjectCard.Image imageSrc={ProjectImg} />
          <ProjectCard.Title>شمل لتنفيذ أحكام الرؤية</ProjectCard.Title>
          <ProjectCard.Description>
            يتم تنفيذ خدمات الرؤية والزيارة ونقل الحضانة بالشراكة مع وزارة العدل
            للأسر المنفصلة
          </ProjectCard.Description>
          <ProjectCard.Progress
            achievedFund={"$5,000"}
            percentage={50}
            targetFund={"$10,000"}
          />
          <ProjectCard.BtnGroup both />
        </ProjectCard>
        <ProjectCard>
          <ProjectCard.Image imageSrc={ProjectImg} />
          <ProjectCard.Title>شمل لتنفيذ أحكام الرؤية</ProjectCard.Title>
          <ProjectCard.Description>
            يتم تنفيذ خدمات الرؤية والزيارة ونقل الحضانة بالشراكة مع وزارة العدل
            للأسر المنفصلة
          </ProjectCard.Description>
          <ProjectCard.Progress
            achievedFund={"$5,000"}
            percentage={50}
            targetFund={"$10,000"}
          />
          <ProjectCard.BtnGroup both />
        </ProjectCard>
      </div>
    </div>
  );
};
export default ProjectsPage;
