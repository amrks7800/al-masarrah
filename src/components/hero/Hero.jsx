import "./hero.css"
import StatsCard from "../stats-card/StatsCard"
import user from "/icons/user.svg"
import project from "/icons/project.svg"
import users from "/icons/users.svg"
import compasion from "/icons/compasion.svg"
import hero1 from "/images/hero1.svg"

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero__container container flex items-center justify-center">
        <div className="">
          <h1 className="">
            مـــــعـــــــــاً نحو أُســـــــــــرة
            <span>مُستـــــقـــــرة وســـــعيـــــدة</span>
          </h1>
          <p>
            نحن هنا لدعم الأسر الناشئة وتمكينها من بناء علاقات صحية ومستدامة.
            نسعى لتعزيز استقرار الأسر في بداياتها، وتقديم حلول عملية لمواجهة
            التحديات وبناء أسس قوية لحياة أسرية متماسكة.
          </p>

          <div className="btn-group flex items-center">
            {/* <Button icon={<img src={arrowLeft} />}>الحوكمة</Button> */}
            {/* <Button variant="secondary" icon={<img src={arrowLeft} />}>
              اعرف المزيد
            </Button> */}
          </div>
        </div>

        <div className="image flex items-center justify-center">
          <img src={hero1} alt="" />
        </div>
      </div>

      <div className="hero__stats container">
        <StatsCard
          icon={<img src={user} />}
          number={"+50000"}
          text={"عدد المســـــــتفيدين"}
        />
        <StatsCard
          icon={<img src={project} />}
          number={"+100"}
          text={"عدد المشـــــــاريع"}
        />
        <StatsCard
          icon={<img src={users} />}
          number={"+25000"}
          text={"عدد الأســــــــر"}
        />
        <StatsCard
          icon={<img src={compasion} />}
          number={"+ مليون ريال"}
          text={"إجمالي التــــــــــبرعات"}
        />
      </div>
    </section>
  )
}
export default Hero
