import Table, {
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../../components/data-table"
import "./page.css"
import Switch from "../../../components/switch"
import Dialog from "../../../components/dialog"
import Button from "../../../components/button/Button"
import plus from "/icons/plus.svg"
import eye from "/icons/eye.svg"
import edit from "/icons/edit.svg"
import deleteIcon from "/icons/delete.svg"
import EventForm from "../../../components/event-form"
import {
  useDeleteEventByIDMutation,
  useGetEventsQuery,
  useUpdateEventByIDMutation,
} from "../../../app/apiSlice"
import { formatDate } from "../../../utils"
import EmptyContent from "../../../components/empty-content"

const LatestNews = () => {
  const { data: events, isEventsLoading, eventsError } = useGetEventsQuery()
  const [updateEventByID, { error: updateEventError, isUpdateEventLoading }] =
    useUpdateEventByIDMutation()

  const [deleteEventByID, { error: deleteEventError, isDeleteEventLoading }] =
    useDeleteEventByIDMutation()

  return (
    <div className="dashboard__latest-news">
      <div className="flex justify-between items-center">
        <h1>أخر الأخبار</h1>
        <Dialog
          renderBtn={openModal => (
            <Button onClick={openModal} icon={<img src={plus} alt="" />}>
              أضافة خبر جديد
            </Button>
          )}
          render={closeModal => <EventForm closeModal={closeModal} />}
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>صورة الخبر</TableCell>
            <TableCell>عنوان الخبر</TableCell>
            <TableCell>وصف الخبر</TableCell>
            <TableCell>الرابط</TableCell>
            <TableCell>تاريخ الخبر</TableCell>
            <TableCell>الحالة</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {events?.map(event => (
            <TableRow key={event.id}>
              <TableCell>
                <img src={event.imageUrl} alt="" className="event-img" />
              </TableCell>
              <TableCell>
                <h1 className="event-title">{event.title}</h1>
              </TableCell>
              <TableCell>
                <p className="event-desc">{event.desc}</p>
              </TableCell>
              <TableCell>
                <a href={event.link} target="_blank" rel="noopener noreferrer">
                  عرض الرابط
                </a>
              </TableCell>
              <TableCell>
                <span className="event-date">
                  {formatDate(event.createdAt)}
                </span>
              </TableCell>
              <TableCell>
                <Switch
                  checked={event.isPublished}
                  key={event.title}
                  id={event.id}
                  onCheckChange={async checked => {
                    try {
                      await updateEventByID({
                        id: event.id,
                        event: { isPublished: checked },
                      }).unwrap()
                    } catch (err) {
                      console.log(err)
                    }
                  }}
                />
              </TableCell>
              <TableCell>
                <div className="btn-group">
                  <Button variant="ghost">
                    <img src={eye} alt="اظهار الخبر" />
                  </Button>
                  <Dialog
                    renderBtn={openModal => (
                      <Button variant="ghost" onClick={openModal}>
                        <img src={edit} alt="اظهار الخبر" />
                      </Button>
                    )}
                    render={closeModal => (
                      <EventForm closeModal={closeModal} event={event} />
                    )}
                  />
                  <Button
                    variant="ghost"
                    onClick={async () => {
                      try {
                        await deleteEventByID(event.id).unwrap()
                      } catch (err) {
                        console.log(err)
                      }
                    }}
                  >
                    <img src={deleteIcon} alt="اظهار الخبر" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {events?.length === 0 && <EmptyContent content="أخبار" />}
    </div>
  )
}
export default LatestNews
