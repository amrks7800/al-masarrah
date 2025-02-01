import Button from "../button/Button"
import Input from "../input"
import Textarea from "../textarea"
import "./index.css"
import arrowLeft from "/icons/arrow-left.svg"
import { useState } from "react"
import Toast from "../toast"
import { useCreateMessageMutation } from "../../app/apiSlice"
import { useNavigate } from "react-router-dom"
import useFormSubmit from "../../hooks/useFormSubmit"
import { EMAIL_REGEX } from "../../constants"

const ContactUsForm = () => {
  const [showToast, setShowToast] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormSubmit({})

  const [
    createMsg,
    { isLoading: isCreatingMsgLoading, error: creatingMsgError },
  ] = useCreateMessageMutation()

  const navigate = useNavigate()

  async function onSubmit(data) {
    try {
      await createMsg(data).unwrap()

      setShowToast(true)
      setTimeout(() => {
        navigate(`/`)
      }, 4000)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="contact-us-form">
      <Toast
        message={"تم بنجاح"}
        type={"success"}
        setShowToast={setShowToast}
        showToast={showToast}
      />
      <h2>تواصل معنا الأن</h2>
      <p>
        يرجى ترك معلوماتك لنا، حتى نتمكن من بدء محادثتنا لتزويدك بمزيد من
        المعلومات
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder={"أدخل الاسم الكامل"}
          register={register}
          name={"name"}
          error={errors["name"]}
          validation={{
            min: {
              length: 3,
              message: "الاسم الكامل يجب أن يكون 3 أحرف على الأقل",
            },
          }}
        />
        <Input
          placeholder={"رقم الهاتف"}
          register={register}
          name="phone"
          error={errors["phone"]}
          validation={{
            min: {
              length: 3,
              message: "الاسم الكامل يجب أن يكون 3 أحرف على الأقل",
            },
          }}
        />
        <Input
          placeholder={"البريد الالكتروني"}
          type="email"
          register={register}
          name="email"
          error={errors["email"]}
          validation={{
            refine: value => {
              const matches = EMAIL_REGEX.test(value)

              return [matches, "الرجاء كتابة بريد صحيح"]
            },
          }}
        />
        <Textarea
          placeholder={"اترك رسالتك"}
          register={register}
          name="msg"
          error={errors["msg"]}
          validation={{
            min: {
              length: 3,
              message: "الوصف يجب أن يكون 3 أحرف على الأقل",
            },
          }}
        />
        <Button
          icon={<img src={arrowLeft} />}
          variant="secondary"
          isLoading={isCreatingMsgLoading}
        >
          ارسال
        </Button>
      </form>
      {creatingMsgError && (
        <p className="text-center text-red-500">
          حدث خطأ, بالرجاء المحاولة لاحقا
        </p>
      )}
    </div>
  )
}
export default ContactUsForm
