"use client"

import ProjectsSection, { ProjectItemType } from "@/app/components/modules/projectsSection"

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
	imagePath: "/images/projects/little/thumnail.webp",
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
	imagePath: "/images/projects/robbery/thumnail.webp",
	right: false
  },
  {
    header: "Portfolio",
	description: "Min portfolio är en webbapplikation som jag har skapat med TypeScript, Tailwind, Next.js och React. Den visar mina projekt och är hostad på en VPS med Nginx och PM2.",
	bulletList: [
	  "TypeScript & Tailwind",
	  "Next.js & React",
	  "VPS-hostad",
	],
	path: "/projects/portfolio",
	imagePath: "/images/projects/portfolio/thumnail.webp",
	right: true
  },
]

export default function Home() {
  return (
    <main>
	  <title>Projekt</title>

	  <ProjectsSection
	    h2="Det här är mina projekt"
		h3="Här kan du läsa om mina projekt, deras framgångar, arbetsprocesser, tidsåtgång och motivationsfaktorer. Känn ingen stress att läsa allt på en gång, innehållet kommer finnas tillgängligt för dig även senare."
		list={...projectsList}
	  />
	</main>
  )
}
