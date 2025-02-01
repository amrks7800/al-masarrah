import "./index.css"
import Button from "../button/Button"
import arrowLeft from "/icons/arrow-left.svg"
import { formatDate } from "../../utils"
import PropTypes from "prop-types"

const NewsCard = ({ news }) => {
  const { title, desc, link, imageUrl, createdAt } = news

  return (
    <div className="news-card">
      <img
        src={imageUrl || "/images/news-img.png"}
        alt={title}
        className="news-card_img"
      />
      <div className="news-card__content">
        <h3 className="line-clamp-1">{title}</h3>
        <p className="desc line-clamp-3">{desc}</p>
        <p className="metadata">
          <span>🗓️التاريخ:</span>
          <span>{formatDate(createdAt)}</span>
        </p>
        <Button
          icon={<img src={arrowLeft} alt="" />}
          onClick={() => {
            // Navigate to the link in a new tab
            window.open(link, "_blank")
          }}
        >
          عرض الرابط
        </Button>
      </div>
    </div>
  )
}
export default NewsCard

NewsCard.propTypes = {
  news: PropTypes.shape({
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    createdAt: PropTypes.string.isRequired,
  }).isRequired,
}
