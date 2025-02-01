import Button from "../button/Button"
import Input from "../input"
import "./index.css"
import loginLogo from "/images/login-logo.svg"
import { useLoginMutation } from "../../app/apiSlice"
import useSessionStorage from "../../hooks/useSessionStorage"
import { useNavigate } from "react-router-dom"
import useFormSubmit from "../../hooks/useFormSubmit"
import { EMAIL_REGEX } from "../../constants"

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormSubmit({
    defaultValues: {
      email: "",
      password: "",
    },
  })

  const [login, { isLoading, error }] = useLoginMutation()

  const [_, setAccessToken] = useSessionStorage("access_token", "")

  const navigate = useNavigate()

  async function onSubmit(data) {
    try {
      const res = await login(data)

      setAccessToken(res.data.access_token)

      navigate("/dashboard")
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className="login-form">
      <div className="logo">
        <img src={loginLogo} alt="" />
      </div>
      <div className="form">
        <div className="text-center">
          <h2>مرحباً بك 👋</h2>
          <p>
            اليوم هو يوم جديد. إنه يومك. أنت من يحدد شكله. قم بتسجيل الدخول لبدء
            إدارة مشاريعك.
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flow">
          <Input
            placeholder={"example@email.com"}
            label={"البريد الالكتروني"}
            type="email"
            register={register}
            name="email"
            error={errors["email"]}
            validation={{
              min: {
                length: 1,
                message: "البريد الالكتروني مطلوب",
              },
              refine: value => {
                const matches = EMAIL_REGEX.test(value)

                return [matches, "الرجاء كتابة بريد صحيح"]
              },
            }}
          />
          <Input
            label={"كلمة المرور"}
            type="password"
            register={register}
            name={"password"}
            error={errors["password"]}
            validation={{
              min: {
                length: 8,
                message: "كلمة المرور يجب أن تكون على الأقل 8 حروف",
              },
              max: {
                length: 20,
                message: "كلمة المرور يجب أن تكون على الأكثر 20 حروف",
              },
            }}
          />
          <Button isLoading={isLoading}>تسجيل الدخول</Button>
          {error && (
            <p className="text-center text-red-500">
              حدث خطأ, بالرجاء المحاولة مرة اخري
            </p>
          )}
        </form>
      </div>
    </div>
  )
}
export default LoginForm
