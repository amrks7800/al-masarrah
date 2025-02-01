import Button from "../button/Button"
import Input from "../input"
import "./index.css"

import {
  useCreateSectionMutation,
  useUpdateSectionByIDMutation,
} from "../../app/apiSlice"
import PropTypes from "prop-types"
import useFormSubmit from "../../hooks/useFormSubmit"

const GovernSectionForm = ({ section, closeModal }) => {
  const [
    createSection,
    { isLoading: isCreatingSectionLoading, error: creatingSectionError },
  ] = useCreateSectionMutation()
  const [
    updateSectionByID,
    { isLoading: isUpdatingSectionLoading, error: updatingSectionError },
  ] = useUpdateSectionByIDMutation()

  const defaultValues = {
    name: section?.name,
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormSubmit({
    defaultValues,
  })

  async function onSubmit(data) {
    if (section) {
      try {
        await updateSectionByID({
          section: data,
          id: section.id,
        })

        closeModal()
      } catch (err) {
        console.log(err)
      }

      return
    }

    try {
      await createSection(data)

      closeModal()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="section-form flow">
      <h2>{section ? "تعديل القسم" : "أضافة قسم حوكمة جديد"}</h2>

      <form action="" className="flow" onSubmit={handleSubmit(onSubmit)}>
        <Input
          label={"عنوان القسم"}
          variant="themed"
          register={register}
          name={"name"}
          error={errors["name"]}
          validation={{
            min: {
              length: 1,
              message: "عنوان القسم مطلوب",
            },
          }}
        />

        <div className="btn-group">
          <Button
            size="lg"
            data-shadow="hidden"
            isLoading={isCreatingSectionLoading}
          >
            ارسال
          </Button>
          <Button
            size="lg"
            data-shadow="hidden"
            variant="tertiary"
            onClick={closeModal}
            type="button"
          >
            اغلاق
          </Button>
        </div>
        {creatingSectionError && (
          <p className="text-center text-red-500">
            حدث خطأ! بالرجاء المحاولة مرة اخري
          </p>
        )}
      </form>
    </div>
  )
}
export default GovernSectionForm

GovernSectionForm.propTypes = {
  section: PropTypes.object, // Optional file name
  closeModal: PropTypes.func.isRequired, // Function from react-hook-form
}
