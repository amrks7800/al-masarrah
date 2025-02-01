import SubHeroSection from "../../components/sub-hero";
import "./leader.css";

const Leader = () => {
  return (
    <div className="leader">
      <SubHeroSection
        showSearch={false}
        title={"المدير التنفيذي"}
        subTitle={"الرئيســـية/المدير التنفيذي"}
      />

      <div className="container">
        <h3>الدكتور علي بن عبدالرحمن العامري</h3>
        <h4>0503782662</h4>
      </div>
    </div>
  );
};

export default Leader;
