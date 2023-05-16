"use client"

import Button from "@/app/components/elements/button"
import Projects, { ProjectItemType } from "@/app/components/modules/projects"
import Image from "next/image"
import { FiExternalLink } from "react-icons/fi"
import { AiFillStar } from "react-icons/ai"

const CONTACT_PATH = "/contact"
const PROJECTS_PATH = "/projects"

interface FactsItem {
  header: string;
  sub: string;
}

interface SkillItem {
  name: string;
}

const factsList: FactsItem[] = [
  { header: "9", sub: "Års erfarenhet" },
  { header: "18", sub: "År gammal" },
  { header: "0", sub: "Olösta problem" },
  { header: "∞", sub: "Drivkraft" },
]

const projectsList: ProjectItemType[] = [
  {
    header: "Programmeringsspråk",
	description: "Little är ett funktionellt programmeringsspråk inspirerat av Lisp, C och Rust med potential för vidare utveckling.",
	bulletList: [
	  "Användarvänligt",
	  "Lättviktigt",
	  "Snabbt",
	],
	path: "/projects/little",
	imagePath: "/language.svg",
	right: true
  },
  {
    header: "Spel för barn",
	description: "Detta Roblox-spel låter barn utforska spänningen i att planera ett bankrån och försöka fly undan lagen, allt i en säker och barnvänlig miljö.",
	bulletList: [
	  "2,000st spelare samtidigt",
	  "12,426,246st spelningar sammanlagt",
	  "≈ 500,000kr i intäkter",
	],
	path: "/projects/robbery",
	imagePath: "/robbery.svg",
	right: false
  },
]

const skillsList: SkillItem[][] = [
  [
    { name: "Next.js" },
    { name: "React" },
    { name: "JavaScript" },
  ],
  [
    { name: "Lua" },
    { name: "C" },
    { name: "TypeScript" },
  ],
]

export default function Home() {
  return (
    <main>
	  { /* Hero Section */ }
	  <section className="flex gap-24 items-center py-16 lg:py-24">
	    <div className="flex flex-col gap-6 items-center lg:items-start">
		  <div className="
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
		  ">
			<b className="w-1/2 bg-white rounded-full py-[1.5px]">Sökande</b>
			<b className="w-1/2">Anställd</b>
		  </div>
		  <h1 className="font-semibold font-inter text-4xl lg:text-6xl leading-tight text-center lg:text-start">
		    Hej, <br/>
			Jag är Elias Sjödin!
		  </h1>
		  <p className="font-regular font-inter text-lg lg:text-xl text-gray-500 text-center lg:text-start">
		    Engagerad systemutvecklare med erfarenhet i
			<b className="font-bold"> C</b>,
			<b className="font-bold"> Lua</b>,
			<b className="font-bold"> React</b>,
			och
			<b className="font-bold"> Next.js</b>.
			Driven av passion för teknik och innovation, redo att skapa framgångsrika lösningar för ditt företag.
		  </p>
	      <div className="flex flex-col lg:flex-row w-full lg:w-auto gap-3">
		    <Button text="Kontakta" className="px-6 py-3" redirectPath={ CONTACT_PATH } />
		    <Button text="Projekt"
			  className="py-4 px-6 bg-white"
			  textColor="text-gray-700"
			  outline
			  icon={ <FiExternalLink size={24} /> }
			  redirectPath={ PROJECTS_PATH }
			/>
		  </div>
		</div>
		<div className="w-[1000px] hidden lg:block">
		  <Image src="/hero-illustration.svg" alt="" width={343} height={622} />
		</div>
	  </section>

	  { /* Skills */ }
	  <section className="flex flex-col gap-8">
		<h3 className="font-medium font-inter text-gray-500 text-lg lg:text-xl text-center">Saker som kan vara bra att veta</h3>
	    <ul className="flex flex-col lg:flex-row gap-8 mx-auto lg:gap-40">
		  {factsList.map((item, i) => {
	        return (
			  <li key={i} className="flex flex-col mx-auto">
			    <b className="font-semibold font-inter text-4xl lg:text-6xl mx-auto">{item.header}</b>
			    <b className="font-medium font-inter text-gray-500 text-lg lg:text-xl whitespace-nowrap">{item.sub}</b>
	          </li>
			)
		  })}
		</ul>
	  </section>

	  { /* Projects */ }
	  <Projects
	    h2="Projekt som kommer få dig att tappa hakan"
		h3="Här är 2 av mina mest imponerande projekt för tillfället, men det kommer alltid att uppdateras med nya och intressanta projekt eftersom."
		list={...projectsList}
	  />

	  { /* Skills */ }
	  <section className="flex flex-col bg-gray-50 items-center text-center pb-24">
		<div className="flex flex-col gap-3 pt-16">
		  <h4 className="font-semibold font-inter text-primary text-base">Viktiga</h4>
		  <h2 className="font-semibold font-inter text-4xl">Kompetenser</h2>
		</div>

		<div className="flex flex-col gap-16 pt-16">
		  {skillsList.map((category, i) => {
		    return (
		      <div key={i} className="flex flex-col lg:flex-row gap-16 lg:gap-28">
		        {category.map((skill, ii) => {
		          return (
		            <section key={ii} className="flex flex-col gap-5">
				      <section className="flex gap-5">
		                <AiFillStar size={48} color={"#6941C6"} />
		                <AiFillStar size={48} color={"#6941C6"} />
					    <AiFillStar size={48} color={"#6941C6"} />
					    <AiFillStar size={48} color={"#6941C6"} />
		              </section>
			  	  	  <h3 className="font-medium font-inter text-xl">{skill.name}</h3>
	    	        </section>
			      )
		        })}
		      </div>
		    )
		  })}
		</div>
	  </section>

	  { /* CTA */ }
	  <section className="flex flex-col gap-5 text-center py-24 max-w-2xl mx-auto">
	    <h1 className="font-semibold font-inter text-4xl lg:text-6xl leading-tight">Är du intresserad?</h1>
	    <p className="font-regular font-inter text-lg lg:text-xl text-gray-500">Tveka inte att skicka ett meddelande till mig. Jag uppskattar alltid din återkoppling, oavsett dess natur, och välkomnar särskilt tankar som sträcker sig bortom det som presenteras här.</p>
	    <div>
	      <Button text="Kontakta" className="px-6 py-3" redirectPath={ CONTACT_PATH } />
	    </div>
	  </section>
	</main>
  )
}
