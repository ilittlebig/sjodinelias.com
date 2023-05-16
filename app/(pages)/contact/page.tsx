"use client"

import axios from "axios";
import React, { useState } from "react"
import FormField from "@/app/components/elements/formField"
import TextArea from "@/app/components/elements/textArea"
import Button from "@/app/components/elements/button"

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

	  <section className="flex flex-col gap-6 py-16">
	    <div className="flex flex-col lg:flex-row gap-4">
		  <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-900">Förnamn</label>
			<FormField name="firstName" value={values.firstName} error={errors.firstName} onChange={handleChange} placeholder="John" />
		  </div>
		  <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-900">Efternamn</label>
			<FormField name="lastName" value={values.lastName} error={errors.lastName} onChange={handleChange} placeholder="Doe" />
		  </div>
		</div>
	    <div className="flex gap-4">
		  <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-900">Email</label>
			<FormField name="email" value={values.email} error={errors.email} onChange={handleChange} placeholder="example@mail.com" />
		  </div>
		</div>
	    <div className="flex gap-4">
		  <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-900">Meddelande</label>
			<TextArea name="message" value={values.message} error={errors.message} onChange={handleChange} placeholder="Skriv ditt meddelande" />
			<p className={`font-regular text-sm ${success ? "text-green-500" : "text-red-500"} mt-1`}>{messageState}</p>
		  </div>
		</div>
		<div>
		  <Button text="Skicka" className="px-6 py-3" />
		</div>
	  </section>
	</form>
  )
}
