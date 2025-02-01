import "./supporters.css"
import brand01 from "/images/brand01.png"
import brand02 from "/images/brand02.png"
import brand03 from "/images/brand03.png"
import brand04 from "/images/brand04.png"

const Supporters = () => {
  return (
    <section className="supporters" id="supporters">
      <h2 className="text-center">شركاء النجاح</h2>
      <div className="wrapper">
        <div className="supporters__container">
          <img src={brand01} alt="" />
          <img src={brand02} alt="" />
          <img src={brand03} alt="" />
          <img src={brand04} alt="" />
          <img src={brand01} alt="" />
          <img src={brand02} alt="" />
          <img src={brand03} alt="" />
          <img src={brand04} alt="" />
          <img src={brand01} alt="" />
          <img src={brand02} alt="" />
          <img src={brand03} alt="" />
          <img src={brand04} alt="" />
        </div>
      </div>
    </section>
  )
}
export default Supporters
