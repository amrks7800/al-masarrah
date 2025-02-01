import SubHeroSection from "../../components/sub-hero"
import "./page.css"
import { ourValues } from "../../constants"

const WhoAreWe = () => {
  return (
    <div className="who-are-we">
      <SubHeroSection title="من نحـــــن" subTitle="الرئيســـية/من نحن" />

      <section className="section-1">
        <div className="container">
          <div className="main-grid">
            {ourValues.slice(0, 2).map((value, index) => (
              <ValueCard value={value} key={index} />
            ))}
          </div>
        </div>
      </section>
      <section className="section-2">
        <div className="section-text text-center">
          <h2>قيــــــــمنا</h2>
          <p>
            نحن نؤمن بأن تقديم الدعم والمساعدة يتطلب الالتزام بمجموعة من القيم
            الأساسية التي توجه عملنا وتضمن تحقيق أفضل النتائج لعملائنا.
          </p>
        </div>
        <div className="container">
          <div className="sub-grid">
            {ourValues.slice(2).map((value, index) => (
              <ValueCard value={value} key={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
export default WhoAreWe

const ValueCard = ({ value }) => {
  return (
    <div className="value-card flow text-center">
      <img src={value.icon} alt={value.title} />
      <h3>{value.title}</h3>
      <p>{value.description}</p>
    </div>
  )
}
