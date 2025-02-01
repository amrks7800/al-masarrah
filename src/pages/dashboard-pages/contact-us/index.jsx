import Table, {
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../../components/data-table"
import "./page.css"
import Dialog from "../../../components/dialog"
import Button from "../../../components/button/Button"

import eye from "/icons/eye.svg"
import { useGetMessagesQuery } from "../../../app/apiSlice"
import { formatDate } from "../../../utils"
import EmptyContent from "../../../components/empty-content"

const Contact = () => {
  const { data: messages } = useGetMessagesQuery()
  return (
    <div className="dashboard__contact">
      <div className="flex justify-between items-center">
        <h1>تواصل معنا</h1>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>الاسم</TableCell>
            <TableCell>البريد الالكتروني</TableCell>
            <TableCell>رقم الهاتف</TableCell>
            <TableCell>التاريخ</TableCell>
            <TableCell>نص الرسالة</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {messages?.map(message => (
            <TableRow key={message.id}>
              <TableCell>
                <h1 className="message-title">{message.name}</h1>
              </TableCell>
              <TableCell>
                <span className="message-date">{message.email}</span>
              </TableCell>
              <TableCell>{message.phone}</TableCell>
              <TableCell>{formatDate(message.createdAt)}</TableCell>
              <TableCell>
                <p className="line-clamp-1 msg-text-renderer">{message.msg}</p>
              </TableCell>
              <TableCell>
                <div className="btn-group">
                  <Dialog
                    renderBtn={openModal => (
                      <Button variant="ghost" onClick={openModal}>
                        <img src={eye} alt="اظهار الخبر" />
                      </Button>
                    )}
                    render={closeModal => (
                      <ShowMessage message={message} closeModal={closeModal} />
                    )}
                  />
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {messages?.length === 0 && <EmptyContent content="رسائل" />}
    </div>
  )
}
export default Contact

const ShowMessage = ({ message, closeModal }) => (
  <div className="show-message">
    <p className="info-slot">
      <img src="/icons/Profile.svg" alt="" />
      <span className="title">الاسم:</span>
      <span className="info">{message.name}</span>
    </p>
    <p className="info-slot">
      <img src="/icons/phone-gray.svg" alt="" />
      <span className="title">رقم الهاتف:</span>
      <span className="info">{message.phone}</span>
    </p>
    <p className="info-slot">
      <img src="/icons/Message-gray.svg" alt="" />
      <span className="title">البريد الالكتروني:</span>
      <span className="info">{message.email}</span>
    </p>
    <p className="text">
      <span className="message-text">نص الرسالة:</span>
      <span className="text-info">"{message.msg}"</span>
    </p>

    <Button
      variant="primary"
      data-shadow="hidden"
      size="lg"
      onClick={closeModal}
    >
      اغلاق
    </Button>
  </div>
)
