"use client"

import ProjectsSection, { ProjectItemType } from "@/app/components/modules/projectsSection"
import HeroSection from "@/app/components/modules/heroSection"
import FactsSection from "@/app/components/modules/factsSection"
import SkillsSection from "@/app/components/modules/skillsSection"
import CTASection from "@/app/components/modules/ctaSection"

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
	imagePath: "/images/projects/little/thumnail.png",
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
	imagePath: "/images/projects/robbery/thumnail.png",
	right: false
  },
]

export default function Home() {
  return (
    <main>
	  <HeroSection />
	  <FactsSection />

	  <ProjectsSection
	    h2="Projekt som kommer få dig att tappa hakan"
		h3="Här är 2 av mina mest imponerande projekt för tillfället, men det kommer alltid att uppdateras med nya och intressanta projekt eftersom."
		list={...projectsList}
	  />

	  <SkillsSection />
	  <CTASection />
	</main>
  )
}
