import "./page.css"
import governFam from "/images/govern-fam.svg"
import correct from "/icons/correct.svg"
import arrowLeft from "/icons/arrow-left.svg"
import Button from "../../../../components/button/Button"

const DocsPolicy = () => {
  return (
    <div className="docs-policy">
      <img src={governFam} alt="" />

      <div className="content">
        <h2>سياسة الاحتفاظ بالوثائق وإتلافها</h2>
        <p>
          جمعية المسرة هي مؤسسة غير ربحية تهدف إلى دعم وتطوير الأسر لبناء مجتمع
          متماسك ومستقر. نسعى جاهدين لتعزيز القيم الأسرية وتقديم الحلول والخدمات
          التي تساعد العائلات على مواجهة التحديات وتحقيق التوازن الأسري.
        </p>

        <ul>
          <li>
            <div className="flex items-center">
              <img src={correct} alt="" />
              جمعية المســرة هي مؤسسة غير ربحية تهدف إلى دعم وتطوير الأسر.
            </div>
          </li>
          <li>
            <div className="flex items-center">
              <img src={correct} alt="" />
              نحن هنا لنكون بيت الأسرة الكبير، الذي يقدم الدعم والرعاية
              والإرشاد.
            </div>
          </li>
        </ul>

        <Button icon={<img src={arrowLeft} />}>تحميل الملف المرفق</Button>
      </div>
    </div>
  )
}
export default DocsPolicy
