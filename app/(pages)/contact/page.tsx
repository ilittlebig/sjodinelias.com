"use client"

import axios from "axios";
import React, { useState } from "react"
import ContactForm from "@/app/components/modules/contactForm"

import { createValidator, required } from "@/app/utils/validator"
import { useForm, FormValues } from "@/app/hooks/useForm"

const validate = createValidator({
  firstName: required,
  lastName: required,
  email: required,
  message: required,
});

export default function Home() {
  const [ success, setSuccess ] = useState(false)
  const [ messageState, setMessageState ] = useState("")

  const onSubmit = (values: FormValues) => {
    axios.post("/api/mail/", {
	  firstName: values.firstName,
	  lastName: values.lastName,
	  email: values.email,
	  message: values.message,
	}).then((response) => {
	  setMessageState(response.data.message)
	  setSuccess(response.status === 200)
	  resetForm()
	}).catch((err) => {
	  setSuccess(false)
	  setMessageState(String(err.message))
	})
  }

  const { values, errors, handleChange, handleSubmit, resetForm } = useForm(
    {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
    validate,
    onSubmit
  )

  return (
    <form className="max-w-2xl mx-auto" onSubmit={handleSubmit}>
      <section className="flex flex-col pt-16 text-gray-900">
        <section className="flex flex-col gap-5 text-center max-w-3xl mx-auto">
  	      <h2 className="font-semibold font-inter text-3xl lg:text-4xl">Kontakta Mig</h2>
  	      <h3 className="font-regular font-inter text-gray-500 text-lg lg:text-xl">Om du önskar att komma i kontakt med mig, är du välkommen att använda följande kontaktinformation. Jag gör mitt bästa för att svara så snart som möjligt.</h3>
		</section>
  	  </section>

      <ContactForm values={values} errors={errors} handleChange={handleChange} success={success} messageState={messageState} />
	</form>
  )
}
