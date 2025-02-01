import SubHeroSection from "../../components/sub-hero";
import "./index.css";
import MainTitle from "../../components/main-title";
import ProgressPar from "../../components/progress-bar";

const SatisfactionPage = () => {
  return (
    <div className="satisfaction-page">
      <SubHeroSection
        subTitle={"الرئيســـية/نسبة الرضا"}
        title={"نسبة الرضا"}
      />
      <MainTitle text={"نسبة رضا المستفيدين "} />
      <div className="container">
        <div className="box flow">
          <MainTitle
            supText={"رضا عملاؤنا"}
            text={"جمعية المسرة .. بيت الأسرة"}
          />

          <div className="progress-wrapper flow">
            <div className="flex justify-between items-center stats">
              <span>نسبة الرضا</span>
              <span>97%</span>
            </div>
            <ProgressPar percentage={97} />
            <p>عدد المستفيدين الراضين : 48500</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SatisfactionPage;
