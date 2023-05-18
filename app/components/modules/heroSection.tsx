"use client"

import Button from "@/app/components/elements/button"
import Image from "next/image"
import { FiExternalLink } from "react-icons/fi"
import { motion, Variants } from "framer-motion"

const CONTACT_PATH: string = "/contact"
const PROJECTS_PATH: string = "/projects"

const HeroSection = () => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
		staggerChildren: 0.1,
		staggerDirection: 1
	  },
    },
  }

  const item: Variants = {
    hidden: {
	  opacity: 0,
	  y: 100,
	},
	show: {
	  opacity: 1,
	  y: 0,

	  transition: {
	    duration: 0.30
	  }
	}
  }

  return (
	  <section className="flex flex-col lg:flex-row gap-24 items-center py-16 lg:py-24">
	    <motion.div className="flex flex-col gap-6 items-center lg:items-start"
	      initial="hidden"
		  whileInView="show"
	      exit="hidden"
	      variants={container}
		>
		  <motion.div className="
		    flex
			bg-secondary
			rounded-full
			p-1
			justify-center
			text-center
			w-56
			text-sm
			font-medium
			font-inter
			text-primary
			items-center
		  "
		  variants={item}>
			<b className="w-1/2 bg-white rounded-full py-[1.5px]">Sökande</b>
			<b className="w-1/2">Anställd</b>
		  </motion.div>
		  <motion.h1
		    className="font-semibold font-inter text-4xl lg:text-6xl leading-tight text-center lg:text-start"
			variants={item}
		  >
		    Hej, <br/>
			Jag är Elias Sjödin!
		  </motion.h1>
		  <motion.p
		    className="font-regular font-inter text-lg lg:text-xl text-gray-500 text-center lg:text-start"
			variants={item}
		  >
		    Engagerad systemutvecklare med erfarenhet i
			<b className="font-bold"> C</b>,
			<b className="font-bold"> Lua</b>,
			<b className="font-bold"> React</b>,
			och
			<b className="font-bold"> Next.js</b>.
			Driven av passion för teknik och innovation, redo att skapa framgångsrika lösningar för ditt företag.
		  </motion.p>
	      <motion.div
		    className="flex flex-col lg:flex-row w-full lg:w-auto gap-3"
			variants={item}
		  >
		    <Button text="Kontakta" className="px-6 py-3" redirectPath={ CONTACT_PATH } />
		    <Button text="Projekt"
			  className="py-4 px-6 bg-white"
			  textColor="text-gray-700"
			  outline
			  icon={ <FiExternalLink size={24} /> }
			  redirectPath={ PROJECTS_PATH }
			/>
		  </motion.div>
		</motion.div>
		<div className="lg:w-[1000px] lg:h-[620px] w-full h-[500px] lg:-mt-0 -mt-6 relative">
		  <Image src="/images/home/hero-illustration.webp" alt="" objectFit="contain" layout="fill" />
		</div>
	  </section>
  )
}

export default HeroSection
