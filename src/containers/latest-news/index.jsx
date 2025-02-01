import { useGetLatestEventsQuery } from "../../app/apiSlice"
import Carousel from "../../components/carousel"
import EmptyContent from "../../components/empty-content"
import NewsCard from "../../components/news-card"
import "./index.css"

const LatestNews = () => {
  const { data: latestNews } = useGetLatestEventsQuery()

  return (
    <section id="latest-news" className="latest-news">
      <div className="latest-news__intro text-center">
        <h2>أخر الأخبار</h2>
        <p>
          ابقَ على اطلاع على أحدث المستجدات والخدمات التي نقدمها لدعم الأسر
          وتعزيز الروابط الأسرية.
        </p>
      </div>
      <div className="container">
        <Carousel
          items={latestNews}
          render={item => <NewsCard news={item} />}
          autoplay
        />

        {latestNews?.length === 0 && <EmptyContent content="أخبار" />}
      </div>
    </section>
  )
}
export default LatestNews
