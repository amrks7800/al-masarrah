import Button from "../button/Button"
import Input from "../input"
import "./index.css"
import FileInput from "../file-input"
import {
  useCreateSectionFileMutation,
  useUpdateSectionFileByIDMutation,
} from "../../app/apiSlice"
import PropTypes from "prop-types"
import useFormSubmit from "../../hooks/useFormSubmit"

const FileForm = ({ file, closeModal, sectionID }) => {
  const [
    createSectionFile,
    { isLoading: isCreatingSectionFile, error: creatingSectionFileError },
  ] = useCreateSectionFileMutation()

  const [
    updateSectionFileByID,
    { isLoading: isUpdatingSectionFile, error: updatingSectionFileError },
  ] = useUpdateSectionFileByIDMutation()

  const defaultValues = {
    name: file?.name,
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormSubmit({
    defaultValues,
  })

  async function onSubmit(data) {
    const formData = new FormData()

    formData.append("name", data.name)
    formData.append("file", data.file[0])

    if (file) {
      try {
        await updateSectionFileByID({
          file: formData,
          sectionID,
          fileID: file.id,
        })

        closeModal()
      } catch (error) {
        console.log(error)
      }
      return
    }

    try {
      await createSectionFile({
        file: formData,
        sectionID,
      })

      closeModal()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="file-form flow">
      <h2>{file ? "تعديل الملف" : "أضافة ملف حوكمة جديد"}</h2>

      <form action="" className="flow" onSubmit={handleSubmit(onSubmit)}>
        <Input
          label={"عنوان الملف"}
          variant="themed"
          register={register}
          name={"name"}
          error={errors["name"]}
          validation={{
            min: {
              length: 1,
              message: "يجب أن يكون العنوان لا يقل عن 1 حرف",
            },
          }}
        />

        <FileInput
          register={register}
          name={"file"}
          error={errors["file"]}
          currentFile={file?.name}
          validation={{
            refine: value => {
              const allowedTypes = ["application/pdf"]

              if (!value) return [true]

              return [allowedTypes.includes(value.type), "يجب استخدام ملف pdf"]
            },
          }}
        />

        <div className="btn-group">
          <Button size="lg" data-shadow="hidden">
            ارسال
          </Button>
          <Button
            size="lg"
            data-shadow="hidden"
            variant="tertiary"
            onClick={closeModal}
            type="button"
            isLoading={file ? isCreatingSectionFile : isUpdatingSectionFile}
          >
            اغلاق
          </Button>
        </div>
      </form>
      {creatingSectionFileError && (
        <p className="text-center text-red-500">
          حدث خطا, بالرجاء المحاولة مرة اخري
        </p>
      )}
      {updatingSectionFileError && (
        <p className="text-center text-red-500">
          حدث خطا, بالرجاء المحاولة مرة اخري
        </p>
      )}
    </div>
  )
}
export default FileForm

FileForm.propTypes = {
  file: PropTypes.object,
  closeModal: PropTypes.func.isRequired,
  sectionID: PropTypes.string.isRequired,
}
