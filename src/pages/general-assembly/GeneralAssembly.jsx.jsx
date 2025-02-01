import MemberCard from "../../components/member-card"
import SubHeroSection from "../../components/sub-hero"
import "./page.css"
import { generalAssemblyMembers } from "../../constants"

const GeneralAssembly = () => {
  return (
    <section>
      <SubHeroSection
        showSearch={false}
        title={"الجمعية العمومية"}
        subTitle={"الرئيســـية/الجمعية العمومية"}
      />

      <div className="team-grid container">
        {generalAssemblyMembers.map(member => (
          <MemberCard
            title={member.title}
            name={member.name}
            key={member.name}
          />
        ))}
      </div>
    </section>
  )
}
export default GeneralAssembly
