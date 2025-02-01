import "./index.css"

const EmptyContent = ({ content = "شيء" }) => {
  return (
    <div className="empty-content">
      <div className="content flow text-center">
        <img src="/images/empty.svg" alt="" width={150} />
        <h2>لا يوجد {content} في الوقت الحالي</h2>
        <h3>سنوافيك بأحدث التفاصيل</h3>
      </div>
    </div>
  )
}
export default EmptyContent
