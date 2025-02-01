import MainTitle from "../../components/main-title";
import ProgressPar from "../../components/progress-bar";
import SubHeroSection from "../../components/sub-hero";
import correct from "/icons/correct.svg";
import "./index.css";
import Button from "../../components/button/Button";
import arrowLeft from "/icons/arrow-left.svg";
import ProjectImg from "/images/hero1.svg";

const ProjectPage = () => {
  return (
    <div className="project-page">
      <SubHeroSection
        title={"شمل لتنفيذ أحكام الرؤية"}
        subTitle={"الرئيســـية/المشاريع"}
      />
      <div className="container flow">
        <img src={ProjectImg} alt="" />
        <div className="content flow">
          <h1>شمل لتنفيذ أحكام الرؤية</h1>
          <p>
            جمعية المسرة هي مؤسسة غير ربحية تهدف إلى دعم وتطوير الأسر لبناء
            مجتمع متماسك ومستقر. نسعى جاهدين لتعزيز القيم الأسرية وتقديم الحلول
            والخدمات التي تساعد العائلات على مواجهة التحديات وتحقيق التوازن
            الأسري.
          </p>
        </div>
      </div>

      <div className="project-details">
        <div className="container flow">
          <MainTitle
            supText={"تفاصيل المشروع"}
            text={"جمعية المسرة .. بيت الأسرة"}
            Element="h2"
          />
          <div className="progress flow">
            <div className="donations flex justify-between items-center">
              <h3>التبرعات</h3>
              <span>60%</span>
            </div>
            <ProgressPar percentage={60} />
            <div className="stats flex justify-between">
              <span>تم تحصيل: $600</span>
              <span>الهدف: $1,000</span>
            </div>
          </div>
          <ul>
            <li className="flow">
              <div className="flex items-center">
                <img src={correct} alt="" />
                جمعية المســرة هي مؤسسة غير ربحية تهدف إلى دعم وتطوير الأسر.
              </div>
              <p>
                جمعية المسرة هي مؤسسة غير ربحية تهدف إلى دعم وتطوير الأسر لبناء
                مجتمع متماسك ومستقر. نسعى جاهدين لتعزيز القيم الأسرية وتقديم
                الحلول والخدمات التي تساعد العائلات على مواجهة التحديات وتحقيق
                التوازن الأسري.
              </p>
            </li>
            <li className="flow">
              <div className="flex items-center">
                <img src={correct} alt="" />
                نحن هنا لنكون بيت الأسرة الكبير، الذي يقدم الدعم والرعاية
                والإرشاد.
              </div>
              <p>
                جمعية المسرة هي مؤسسة غير ربحية تهدف إلى دعم وتطوير الأسر لبناء
                مجتمع متماسك ومستقر. نسعى جاهدين لتعزيز القيم الأسرية وتقديم
                الحلول والخدمات التي تساعد العائلات على مواجهة التحديات وتحقيق
                التوازن الأسري.
              </p>
            </li>
            <li className="flow">
              <div className="flex items-center">
                <img src={correct} alt="" />
                نحن هنا لنكون بيت الأسرة الكبير، الذي يقدم الدعم والرعاية
                والإرشاد.
              </div>
              <p>
                جمعية المسرة هي مؤسسة غير ربحية تهدف إلى دعم وتطوير الأسر لبناء
                مجتمع متماسك ومستقر. نسعى جاهدين لتعزيز القيم الأسرية وتقديم
                الحلول والخدمات التي تساعد العائلات على مواجهة التحديات وتحقيق
                التوازن الأسري.
              </p>
            </li>
          </ul>

          <div className="btn-group flex items-center">
            <Button icon={<img src={arrowLeft} />}>تبرع الان</Button>
            <Button variant="secondary" icon={<img src={arrowLeft} />}>
              تواصل معنا
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProjectPage;
