import "./definition.css";
import introImage from "/images/hero2.svg";

const Definition = () => {
  return (
    <section className="definition" id="definition">
      <div className="container">
        <div className="definition__container flex items-center justify-center flex-1">
          <div className="image">
            <img
              src={introImage}
              alt=""
              style={{
                width: "100%",
              }}
            />
          </div>
          <div className="content">
            <span className="intro-title">من نحن</span>
            <h2>جمعية المسرة .. بيت الأسرة الناشئة</h2>
            <p>
              جمعية المسرة هي مؤسسة غير ربحية موجهة لدعم الأسر الناشئة وتطويرها،
              بهدف بناء مجتمع متماسك ومستقر. نكرّس جهودنا لتمكين الأسر الناشئة
              من التغلب على التحديات وتعزيز استقرارها عبر تقديم برامج وخدمات
              مبتكرة تُسهم في تحقيق التوازن الأسري وتقوية الروابط بين أفرادها.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Definition;
