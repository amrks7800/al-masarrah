import "./page.css"
import SubHeroSection from "../../components/sub-hero"
import { Button, File } from "../../components/"
import { Link } from "react-router-dom"
import {
  useGetSectionFilesForUserQuery,
  useGetSectionsQuery,
} from "../../app/apiSlice"
const Government = () => {
  const { data: sections } = useGetSectionsQuery()

  const publicEvents = [
    "محضر_اجتماع_الجمعية_العمومية_مع_فرز_الاصوات.pdf",
    "محضر_اجتماع_الجمعية_العمومية_غير_العادي_مع_فرز_الاصوات.pdf",
    "اجتماع_الجمعية_العمومية_العادي_الثالث_مع_فرز_الاصوات.pdf",
    "محضر اجتماع الجمعية العمومية الأول.pdf",
  ]

  const management = [
    "أسماء أعضاء مجلس الإدارة في دورته الأولى.docx",
    "نموذج الإفصاح.pdf",
  ]

  const base = [
    "اللائحة الأساسية.pdf",
    "سياسة إدارة المتطوعين.pdf",
    "سياسة جمع التبرعات.pdf",
    "سياسة خصوصية البيانات.pdf",
    "سياسة_الاحتفاظ_بالوثائق_وإتلافها.pdf",
    "سياسة_التبليغ_عن_المخالفات_وحماية_المبلغين.pdf",
    "سياسة_تنظيم_العالقة_مع_المستفيدين_وتقديم.pdf",
    "سياسة_تنظيم_تعارض_المصالح_+_نموذج_الافصاح.pdf",
    "إطلاع_المستفيدين_على_اللوائح_والسياسات.pdf",
  ]

  const activities = [
    "التقرير السنوي المسرة 23.pdf",
    "تقارير البرامج والأنشطة.docx",
  ]

  return (
    <>
      <SubHeroSection
        title={" أدلة الحوكمة"}
        subTitle={"الرئيســـية/أدلة الحوكمة"}
      />
      <div className="government">
        <div className="container">
          {sections?.map((section, index) => (
            <Section section={section} key={index} />
          ))}
        </div>
      </div>
    </>
  )
}
export default Government

const Section = ({ section }) => {
  const { data: files } = useGetSectionFilesForUserQuery(section.id)

  return (
    <>
      <h2>{section.name}</h2>
      <div className="files">
        {files?.map((file, index) => (
          <File name={file.name} key={index} link={file.fileUrl} />
        ))}
      </div>
    </>
  )
}
