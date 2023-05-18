"use client"

import Button from "@/app/components/elements/button"

const CONTACT_PATH: string = "/contact"

const CTASection = () => {
  return (
    <section className="flex flex-col gap-5 text-center py-24 max-w-2xl mx-auto">
	  <h1 className="font-semibold font-inter text-4xl lg:text-6xl leading-tight">Är du intresserad?</h1>
	  <p className="font-regular font-inter text-lg lg:text-xl text-gray-500">Tveka inte att skicka ett meddelande till mig. Jag uppskattar alltid din återkoppling, oavsett dess natur, och välkomnar särskilt tankar som sträcker sig bortom det som presenteras här.</p>
	  <div>
	    <Button text="Kontakta" className="px-6 py-3" redirectPath={ CONTACT_PATH } />
	  </div>
	</section>
  )
}

export default CTASection
