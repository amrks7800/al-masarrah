import { useEffect, useState } from "react"
import "./index.css"
import PropTypes from "prop-types"

const Carousel = ({
  autoplay = false,
  autoplayInterval = 5000,
  items,
  render,
}) => {
  const [activeIndex, setActiveIndex] = useState(0)

  const lastItemIndex = items?.length - 1

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      if (activeIndex === lastItemIndex) {
        setActiveIndex(0)
      } else {
        setActiveIndex(activeIndex + 1)
      }
    }, autoplayInterval)

    return () => clearInterval(interval)
  }, [activeIndex])
  return (
    <div className="carousel">
      <div
        className="carousel__inner"
        style={{
          translate: `${100 * activeIndex}%`,
        }}
      >
        {items?.map((item, index) => (
          <div className="carousel__item" key={index}>
            {render(item)}
          </div>
        ))}
      </div>
      <div className="carousel__bullets flex items-center justify-center">
        {items?.map((_, index) => (
          <button
            key={index}
            className={`carousel__bullet ${
              activeIndex === index ? "active" : ""
            }`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  )
}
export default Carousel

Carousel.propTypes = {
  autoplay: PropTypes.bool,
  autoplayInterval: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.any).isRequired, // Adjust 'PropTypes.any' to the actual type of items
  render: PropTypes.func.isRequired,
}
