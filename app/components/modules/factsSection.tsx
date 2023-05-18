import { motion, Variants } from "framer-motion"

interface FactsItem {
  header: string;
  sub: string;
}

const factsList: FactsItem[] = [
  { header: "9", sub: "Års erfarenhet" },
  { header: "18", sub: "År gammal" },
  { header: "0", sub: "Olösta problem" },
  { header: "∞", sub: "Drivkraft" },
]

const FactsSection = () => {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
		staggerChildren: 0.3,
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
	    duration: 0.6
	  }
	}
  }

  return (
    <section className="flex flex-col gap-8">
	  <h3 className="font-medium font-inter text-gray-500 text-lg lg:text-xl text-center">Saker som kan vara bra att veta</h3>
	  <motion.ul
	    className="flex flex-col lg:flex-row gap-8 mx-auto lg:gap-40"
	    initial="hidden"
	    whileInView="show"
		exit="hidden"
	    variants={container}
	  >
		{factsList.map((factsItem, i) => {
	      return (
		    <motion.li key={i} className="flex flex-col mx-auto" variants={item}>
			  <b className="font-semibold font-inter text-4xl lg:text-6xl mx-auto">{factsItem.header}</b>
			  <b className="font-medium font-inter text-gray-500 text-lg lg:text-xl whitespace-nowrap">{factsItem.sub}</b>
	        </motion.li>
		  )
	    })}
	  </motion.ul>
    </section>
  )
}

export default FactsSection
