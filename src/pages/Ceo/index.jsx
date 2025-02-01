import "./index.css"
import { boardOfDirectors } from "../../constants"
import SubHeroSection from "../../components/sub-hero"

const CEO = () => {
  const [ceo] = boardOfDirectors
  return (
    <div className="ceo-page">
      <SubHeroSection title={ceo.name} subTitle={"الرئيســـية/مجلس الإدارة"} />
      <div className="container">
        <img src="/images/young-man.png" alt="" />
        <div className="ceo-info">
          <h2>{ceo.name}</h2>
          <p>{ceo.title}</p>
          <div className="ceo-phone">
            <img src="/icons/phone.svg" alt="" />
            <p>رقم الهاتف:</p>
            <span dir="ltr">+1-206-156 2849</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CEO
