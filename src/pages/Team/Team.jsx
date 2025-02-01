import MemberCard from "../../components/member-card"
import SubHeroSection from "../../components/sub-hero"
import "./page.css"
import { boardOfDirectors } from "../../constants"

const Team = () => {
  return (
    <section>
      <SubHeroSection
        showSearch={false}
        title={"مجلـــس الإدارة"}
        subTitle={"الرئيســـية/مجلس الإدارة"}
      />

      <div className="team-grid container">
        {boardOfDirectors.map(director => (
          <MemberCard
            title={director.title}
            name={director.name}
            key={director.name}
          />
        ))}
      </div>
    </section>
  )
}
export default Team
