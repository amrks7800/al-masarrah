import Button from "../button/Button"
import ImageInput from "../image-input"
import Input from "../input"
import Textarea from "../textarea"
import "./index.css"
import {
  useCreateEventMutation,
  useUpdateEventByIDMutation,
} from "../../app/apiSlice"
import PropTypes from "prop-types"
import useFormSubmit from "../../hooks/useFormSubmit"
import { URL_REGEX } from "../../constants"

const EventForm = ({ event, closeModal }) => {
  const defaultValues = {
    title: event?.title,
    desc: event?.desc,
    link: event?.link,
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormSubmit({
    defaultValues,
  })

  const [updateEventByID, { error: updateEventError, isUpdateEventLoading }] =
    useUpdateEventByIDMutation()

  const [createEvent, { error: createEventError, isCreateEventLoading }] =
    useCreateEventMutation()

  async function onSubmit(data) {
    const formData = new FormData()

    for (const [key, value] of Object.entries(data)) {
      if (value instanceof FileList) {
        formData.append(key, value[0])
      } else {
        formData.append(key, value)
      }
    }

    if (event) {
      try {
        await updateEventByID({
          event: formData,
          id: event.id,
        }).unwrap()

        closeModal()
      } catch (err) {
        console.log("error")
      }

      return
    }

    try {
      await createEvent(formData).unwrap()

      closeModal()
    } catch (err) {
      console.log("error")
    }
  }

  return (
    <div className="event-form flow" key={event?.id}>
      <h2>{event ? "تعديل الخبر" : "أضافة خبر جديد"}</h2>

      <form action="" className="flow" onSubmit={handleSubmit(onSubmit)}>
        <ImageInput
          register={register}
          name={"image"}
          error={errors["image"]}
          currentImage={event?.imageUrl}
          key={event?.id}
        />
        <Input
          label={"عنوان الخبر"}
          variant="themed"
          name={"title"}
          error={errors["title"]}
          register={register}
          validation={{
            min: {
              length: 1,
              message: "العنوان مطلوب",
            },
          }}
        />
        <Input
          label={"رابط الخبر"}
          variant="themed"
          register={register}
          name={"link"}
          error={errors["link"]}
          validation={{
            refine: value => {
              const matches = URL_REGEX.test(value)

              return [matches, "الرجاء كتابة رابط صحيح"]
            },
            required: true,
          }}
        />
        <Textarea
          variant={"themed"}
          label={"وصف الخبر"}
          register={register}
          name={"desc"}
          error={errors["desc"]}
          validation={{
            min: {
              length: 1,
              message: "الوصف مطلوب",
            },
            max: {
              length: 500,
              message: "الوصف يجب أن يكون أقل من 500 حرفا",
            },
            optional: true,
          }}
        />
        <div className="btn-group">
          <Button
            size="lg"
            data-shadow="hidden"
            isLoading={event ? isUpdateEventLoading : isCreateEventLoading}
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
      </form>
    </div>
  )
}
export default EventForm

EventForm.propTypes = {
  event: PropTypes.object,
  closeModal: PropTypes.func.isRequired,
}
