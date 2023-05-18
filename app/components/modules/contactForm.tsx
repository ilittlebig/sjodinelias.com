import { FormValues } from "@/app/hooks/useForm"

import FormField from "@/app/components/elements/formField"
import TextArea from "@/app/components/elements/textArea"
import Button from "@/app/components/elements/button"

const ContactForm = ({
  values, errors, handleChange, success, messageState
}: FormValues) => {
  return (
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
  )
}

export default ContactForm
