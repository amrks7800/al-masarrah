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
import { useParams } from "react-router-dom"
import FileForm from "../../../components/file-form"
import Switch from "../../../components/switch"
import {
  useDeleteSectionFileByIDMutation,
  useGetSectionByIDQuery,
  useGetSectionFilesQuery,
  useUpdateSectionFileByIDMutation,
} from "../../../app/apiSlice"
import { formatDate } from "../../../utils"
import { useId } from "react"
import EmptyContent from "../../../components/empty-content"

const GovernFilePage = () => {
  const uniqueID = useId()
  const { id } = useParams()

  const { data: section } = useGetSectionByIDQuery(id)

  const { data: sectionFiles } = useGetSectionFilesQuery(id)

  const [deleteFileByID] = useDeleteSectionFileByIDMutation()

  const [
    updateSectionFileByID,
    { isLoading: isUpdatingSectionFile, error: updatingSectionFileError },
  ] = useUpdateSectionFileByIDMutation()

  return (
    <div className="dashboard__govern-file">
      <div className="flex justify-between items-center">
        <h1>{section?.name}</h1>
        <Dialog
          renderBtn={openModal => (
            <Button onClick={openModal} icon={<img src={plus} alt="" />}>
              أضافة ملف جديد
            </Button>
          )}
          render={closeModal => (
            <FileForm closeModal={closeModal} sectionID={id} key={uniqueID} />
          )}
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>الملفات</TableCell>
            <TableCell>تاريخ الاضافة</TableCell>
            <TableCell>الحالة</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sectionFiles?.map(file => (
            <TableRow key={file.id}>
              <TableCell>
                <h1 className="section-title">{file.name}</h1>
              </TableCell>
              <TableCell>
                <span className="section-date">
                  {formatDate(file.createdAt)}
                </span>
              </TableCell>
              <TableCell>
                <Switch
                  checked={file.isPublished}
                  id={file.id}
                  onCheckChange={async checked => {
                    const fileData = new FormData()

                    fileData.append("isPublished", checked)
                    try {
                      await updateSectionFileByID({
                        sectionID: id,
                        fileID: file.id,
                        file: fileData,
                      })
                    } catch (e) {
                      console.log(e)
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
                      <FileForm
                        closeModal={closeModal}
                        file={file}
                        sectionID={id}
                        key={file.fileUrl}
                      />
                    )}
                  />
                  <Button
                    variant="ghost"
                    onClick={async () => {
                      try {
                        await deleteFileByID({
                          fileID: file.id,
                          sectionID: id,
                        })
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
      {sectionFiles?.length === 0 && <EmptyContent content="أخبار" />}
    </div>
  )
}
export default GovernFilePage
