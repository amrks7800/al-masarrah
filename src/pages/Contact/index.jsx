import ContactUsForm from "../../components/contact-us-form"
import SubHeroSection from "../../components/sub-hero"
import "./index.css"

const ContactUs = () => {
  return (
    <div>
      <SubHeroSection
        showSearch={false}
        subTitle={"الرئيســـية/تواصل معنا"}
        title={"تواصل معنا"}
      />
      <div className="container">
        <ContactUsForm />
      </div>
    </div>
  )
}
export default ContactUs
