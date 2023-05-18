import { useState, FormEvent, ChangeEvent } from "react"

export type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}
export type FormErrors = Partial<Record<keyof FormValues, boolean>>

export const useForm = (
  initialValues: FormValues,
  validate: (values: FormValues) => FormErrors,
  onSubmit: (values: FormValues) => void
) => {
  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})

  const handleChange = (event?: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event?.target ?? { name: "", value: "" }
    setValues({
      ...values,
      [name]: value,
    })

    const error = validate({ ...values, [name as keyof FormValues]: value })[name as keyof FormValues]
    setErrors((prevErrors) => {
      const newErrors = { ...prevErrors }
      if (error) {
        newErrors[name as keyof FormValues] = error
      } else {
        delete newErrors[name as keyof FormValues]
      }
      return newErrors
    })
  }

  const resetForm = () => {
	setValues(initialValues)
	setErrors({})
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()
    const formErrors = validate(values)
    setErrors(formErrors)

    if (Object.keys(formErrors).length === 0) {
	  onSubmit(values)
    }
  }

  return { values, errors, handleChange, handleSubmit, resetForm }
}
