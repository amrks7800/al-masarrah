import Table, {
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../../components/data-table"
import "./page.css"
import Dialog from "../../../components/dialog"
import Button from "../../../components/button/Button"
import plus from "/icons/plus.svg"
import eye from "/icons/eye.svg"
import edit from "/icons/edit.svg"
import deleteIcon from "/icons/delete.svg"
import GovernSectionForm from "../../../components/govern-section-form"
import { useNavigate } from "react-router-dom"
import {
  useDeleteSectionByIDMutation,
  useGetSectionsQuery,
} from "../../../app/apiSlice"
import { formatDate } from "../../../utils"
import EmptyContent from "../../../components/empty-content"

const Govern = () => {
  const navigate = useNavigate()

  const { data: sections } = useGetSectionsQuery()

  const [deleteSectionByID] = useDeleteSectionByIDMutation()

  return (
    <div className="dashboard__govern">
      <div className="flex justify-between items-center">
        <h1>الحوكمة</h1>
        <Dialog
          renderBtn={openModal => (
            <Button onClick={openModal} icon={<img src={plus} alt="" />}>
              أضافة قسم جديد
            </Button>
          )}
          render={closeModal => <GovernSectionForm closeModal={closeModal} />}
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>الاقسام</TableCell>
            <TableCell>تاريخ الاضافة</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sections?.map(section => (
            <TableRow key={section.id}>
              <TableCell>
                <h1 className="section-title">{section.name}</h1>
              </TableCell>
              <TableCell>
                <span className="section-date">
                  {formatDate(section.createdAt)}
                </span>
              </TableCell>
              <TableCell>
                <div className="btn-group">
                  <Button
                    variant="ghost"
                    onClick={() => {
                      navigate("/dashboard/govern/" + section.id)
                    }}
                  >
                    <img src={eye} alt="اظهار الخبر" />
                  </Button>
                  <Dialog
                    renderBtn={openModal => (
                      <Button variant="ghost" onClick={openModal}>
                        <img src={edit} alt="اظهار الخبر" />
                      </Button>
                    )}
                    render={closeModal => (
                      <GovernSectionForm
                        closeModal={closeModal}
                        section={section}
                      />
                    )}
                  />
                  <Button
                    variant="ghost"
                    onClick={async () => {
                      try {
                        await deleteSectionByID(section.id)
                      } catch (e) {
                        console.log(e)
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
      {sections?.length === 0 && <EmptyContent content="أقسام" />}
    </div>
  )
}
export default Govern
